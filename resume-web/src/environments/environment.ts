// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const BASE_URL = 'https://cloud.jbhr.com.tw/Resume';

export const environment = {
  production: false,
  apiBaseUrl: BASE_URL,
  social: {
    'GOOGLE': {
      client_id: '808313774683-061do9kvu3d7j5klhs90evvut73ik5jh.apps.googleusercontent.com',
      options: {
        scopes: 'openid',
        redirect_uri: 'https://jyebaw.vjinc.biz',
      }
    },
    'FACEBOOK': {
      client_id: '1033332980685759',
      options: {
        state: '12345abcde',
        redirect_uri: 'https://jyebaw.vjinc.biz',
      }
    },
    'LINE': {
      client_id: '1657468468',
      options: {
        scopes: 'openid',
        state: '12345abcde',
        redirect_uri: 'https://jyebaw.vjinc.biz',
      }
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
