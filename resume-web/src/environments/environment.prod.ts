const BASE_URL = 'https://cloud.jbhr.com.tw/Resume';

export const environment = {
  production: true,
  apiBaseUrl: BASE_URL,
  social: {
    'GOOGLE': {
      client_id: '808313774683-061do9kvu3d7j5klhs90evvut73ik5jh.apps.googleusercontent.com',
      options: {
        scopes: 'openid',
      }
    },
    'FACEBOOK': {
      client_id: '1033332980685759',
      options: {
        state: '12345abcde',
      }
    },
    'LINE': {
      client_id: '1657468468',
      options: {
        scope: 'openid',
        state: '12345abcde',
      }
    }
  }
};
