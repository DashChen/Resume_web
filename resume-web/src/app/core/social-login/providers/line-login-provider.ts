import { BaseLoginProvider } from '../entities/basic-login-provider';
import { SocialUser } from '../entities/social-user';

declare let Line: any;

export class LineLoginProvider extends BaseLoginProvider {
  initialize(autoLogin?: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
        resolve();
    });
  }
  getLoginStatus(): Promise<SocialUser> {
    return new Promise((resolve, reject) => {
        let user: SocialUser = new SocialUser();
        resolve(user);
    });
  }

  public static readonly PROVIDER_ID: string = 'LINE';
  public static readonly LINE_BASE_URL: string = 'https://access.line.me';

  private requestOptions = {
    response_type: 'code',
    client_id: '',
    redirect_uri: '',
    state: '',
    scope: '',
  };

  stateKey: string;

  constructor(private clientId: string, initOptions: Object = {}) {
    super();
    this.requestOptions = {
      ...this.requestOptions,
      client_id: clientId,
      ...initOptions,
    };
    this.stateKey = `${LineLoginProvider.PROVIDER_ID}_state`;
  }

  /**
   * ref: https://developers.line.biz/en/docs/line-login/integrate-line-login/#making-an-authorization-request
   * @param signInOptions
   * @returns
   */
  signIn(signInOptions?: any): Promise<SocialUser> {
    const options = { ...this.requestOptions, ...signInOptions };
    // store state to localStorage
    localStorage.setItem(this.stateKey, options.state);
    return new Promise((resolve, reject) => {
        window.location.href = LineLoginProvider.LINE_BASE_URL +  '/oauth2/v2.1/authorize?' + new URLSearchParams(options).toString();
        let user: SocialUser = new SocialUser();
        resolve(user);
    });
  }

  signOut(revoke?: boolean): Promise<void> {
    localStorage.removeItem(this.stateKey);
    return new Promise((resolve, reject) => {
        resolve();
    });
  }

  parseSocialUserFromObj(params: any): SocialUser | null {
    if (!params || !params['code']) {
        return null;
    }

    let user: SocialUser = new SocialUser();
    user.provider = params['provider'];
    user.authToken = params['code'];
    user.response = params;
    return user;
  }
}