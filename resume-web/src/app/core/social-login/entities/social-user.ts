export interface _socialUser {
    provider: string;
    id?: string;
    email?: string;
    name?: string;
    photoUrl?: string;
    authToken: string;
    firstName?:string;
    lastName?:string;
    idToken?: string; // Reference https://developers.google.com/identity/sign-in/web/backend-auth
    authorizationCode?: string; // Reference https://developers.google.com/identity/sign-in/web/reference#googleauthgrantofflineaccessoptions

    response: any;
}

export class SocialUser implements _socialUser {
    provider: string = '';
    id?: string = '';
    email?: string = '';
    name?: string = '';
    photoUrl?: string = '';
    authToken: string = '';
    firstName?:string;
    lastName?:string;
    idToken?: string; // Reference https://developers.google.com/identity/sign-in/web/backend-auth
    authorizationCode?: string; // Reference https://developers.google.com/identity/sign-in/web/reference#googleauthgrantofflineaccessoptions

    response: any;

    constructor(init?: _socialUser) {
        if (init) {
            Object.assign(this, init);
        }
    }
  }