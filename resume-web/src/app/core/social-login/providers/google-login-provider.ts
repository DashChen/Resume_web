/// <reference types="@types/google.accounts" />
import { BaseLoginProvider } from '../entities/basic-login-provider';
import { SocialUser } from '../entities/social-user';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject, filter, skip, take } from 'rxjs';


export interface GoogleInitOptions extends google.accounts.id.IdConfiguration {
  /**
   * enables the One Tap mechanism, and makes auto-login possible
   */
  oneTapEnabled?: boolean;
  /**
   * list of permission scopes to grant in case we request an access token
   */
  scopes?: string | string[];
 /**
   * This attribute sets the DOM ID of the container element. If it's not set, the One Tap prompt is displayed in the top-right corner of the window.
   */
  prompt_parent_id?: string;

  /**
   * Optional, defaults to 'select_account'.
   * A space-delimited, case-sensitive list of prompts to present the
   * user.
   * Possible values are:
   * empty string The user will be prompted only the first time your
   *     app requests access. Cannot be specified with other values.
   * 'none' Do not display any authentication or consent screens. Must
   *     not be specified with other values.
   * 'consent' Prompt the user for consent.
   * 'select_account' Prompt the user to select an account.
   */
  prompt? : '' | 'none' | 'consent' | 'select_account';

  btnId?: string;
}

export class GoogleLoginProvider extends BaseLoginProvider {
  public static readonly PROVIDER_ID: string = 'GOOGLE';

  public override readonly changeUser = new EventEmitter<SocialUser | null>();

  private readonly _socialUser = new BehaviorSubject<SocialUser | null>(null);
  private readonly _accessToken = new BehaviorSubject<string | null>(null);
  private readonly _receivedAccessToken = new EventEmitter<string | null>();
  private _tokenClient: google.accounts.oauth2.TokenClient | undefined;

  constructor(
    private clientId: string,
    private readonly initOptions?: GoogleInitOptions
  ) {
    super();

    this.initOptions = { client_id: clientId, oneTapEnabled: true, ...this.initOptions };

    // emit changeUser events but skip initial value from behaviorSubject
    this._socialUser.pipe(skip(1)).subscribe(this.changeUser);

    // emit receivedAccessToken but skip initial value from behaviorSubject
    this._accessToken.pipe(skip(1)).subscribe(this._receivedAccessToken);
  }

  initialize(autoLogin?: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.loadScript(
          GoogleLoginProvider.PROVIDER_ID,
          'https://accounts.google.com/gsi/client',
          () => {
            google.accounts.id.initialize({
              client_id: this.clientId,
              auto_select: autoLogin,
              callback: ({ credential }) => {
                const socialUser = this.createSocialUser(credential);
                this._socialUser.next(socialUser);
              },
              prompt_parent_id: this.initOptions?.prompt_parent_id,
              itp_support: this.initOptions?.oneTapEnabled
            });

            if (this.initOptions?.oneTapEnabled) {
              this._socialUser
                .pipe(filter((user) => user === null))
                .subscribe(() => google.accounts.id.prompt(console.debug));
            }

            if (this.initOptions?.scopes) {
              const scope =
                this.initOptions.scopes instanceof Array
                  ? this.initOptions.scopes.filter((s) => s).join(' ')
                  : this.initOptions.scopes;

              this._tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: this.clientId,
                scope,
                prompt : this.initOptions.prompt,
                callback: (tokenResponse) => {
                  if (tokenResponse.error) {
                    this._accessToken.error({
                      code: tokenResponse.error,
                      description: tokenResponse.error_description,
                      uri: tokenResponse.error_uri,
                    });
                  } else {
                    this._accessToken.next(tokenResponse.access_token);
                  }
                },
              });
            }
            let btnId = 'googleLoginBtn';
            if (this.initOptions?.btnId) {
              btnId = this.initOptions.btnId;
            }
            const btnIdElement = document.getElementById(btnId);
            if (btnIdElement) {
              google.accounts.id.renderButton(
                btnIdElement,
                {
                  theme: "outline",
                  size: "large",
                  type: 'standard',
                  width: '320'
                }
              );
            }

            resolve();
          }
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  getLoginStatus(): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
      if (this._socialUser.value) {
        resolve(this._socialUser.value);
      } else {
        reject(
          `No user is currently logged in with ${GoogleLoginProvider.PROVIDER_ID}`
        );
      }
    });
  }

  override refreshToken(): Promise<SocialUser | null> {
    return new Promise((resolve, reject) => {
      if (this._socialUser.value && this._socialUser.value.id) {
        google.accounts.id.revoke(this._socialUser.value.id, (response) => {
          if (response.error) reject(response.error);
          else resolve(this._socialUser.value);
        });
      } else {
        reject('No token client was instantiated, you should specify some scopes.')
      }
    });
  }

  getAccessToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!this._tokenClient) {
        if (this._socialUser.value) {
          reject(
            'No token client was instantiated, you should specify some scopes.'
          );
        } else {
          reject('You should be logged-in first.');
        }
      } else {
        this._tokenClient.requestAccessToken({
          hint: this._socialUser.value?.email,
        });
        this._receivedAccessToken.pipe(take(1)).subscribe(res => res && resolve(res));
      }
    });
  }

  revokeAccessToken(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this._tokenClient) {
        reject(
          'No token client was instantiated, you should specify some scopes.'
        );
      } else if (!this._accessToken.value) {
        reject('No access token to revoke');
      } else {
        google.accounts.oauth2.revoke(this._accessToken.value, () => {
          this._accessToken.next(null);
          resolve();
        });
      }
    });
  }

  signIn(): Promise<SocialUser> {
    return Promise.reject(
      'You should not call this method directly for Google, use "<asl-google-signin-button>" wrapper ' +
        'or generate the button yourself with "google.accounts.id.renderButton()" ' +
        '(https://developers.google.com/identity/gsi/web/guides/display-button#javascript)'
    );
  }

  async signOut(): Promise<void> {
    google.accounts.id.disableAutoSelect();
    this._socialUser.next(null);
  }

  private createSocialUser(idToken: string) {
    const user = new SocialUser();
    user.idToken = idToken;
    const payload = this.decodeJwt(idToken);
    user.id = payload['sub'];
    user.name = payload['name'];
    user.email = payload['email'];
    user.photoUrl = payload['picture'];
    user.firstName = payload['given_name'];
    user.lastName = payload['family_name'];
    return user;
  }

  private decodeJwt(idToken: string): Record<string, string | undefined> {
    const base64Url = idToken.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window.atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  parseSocialUserFromObj(params: any): SocialUser | null {
    return null;
  }
}