import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { from, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Api, ApiConfig, ContentType, RequestParams, VoloAbpHttpRemoteServiceErrorResponse } from '../models/Api';
import { loginRequestDto, loginResponseDto } from '../models/login.model';
import { Store } from '@ngrx/store';
import { Selectors as UserSelectors } from '@app/shared/store/user';
import { Selectors as AdminSelectors } from '@app/shared/store/admin';

@Injectable({
  providedIn: 'root'
})
export class DataService<SecurityDataType extends unknown> extends Api<SecurityDataType> {
  userToken$ = this.store.select(UserSelectors.selectToken);
  _userToken: string = '';

  adminToken$ = this.store.select(AdminSelectors.selectToken);
  _adminToken: string = '';

  constructor(
    public store: Store,
    @Inject('API_BASE_URL') apiBaseUrl: string
    ) {
      super({
        baseUrl: apiBaseUrl
      } as ApiConfig)
    this.userToken$.subscribe(token => {
      if (token) {
        this._userToken = `${token.token_type} ${token.access_token}`;
        this.setAuthorizationToken('user');
      }
    });
    this.adminToken$.subscribe(token => {
      if (token) {
        this._adminToken = `${token.token_type} ${token.access_token}`;
        this.setAuthorizationToken('admin');
      }
    });
  }

  getToken(params: { username: string; password: string }) {
    return this.request<loginResponseDto, VoloAbpHttpRemoteServiceErrorResponse>({
      path: '/connect/token',
      method: "POST",
      query: {
        __tenant: 'Resume'
      },
      body: {
        Client_id: 'Resume_App',
        Client_secret: '1q2w3e*',
        username: params.username,
        password: params.password,
        scope: 'Resume',
        grant_type: 'password',
      } as loginRequestDto,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
    });
  }

  getAuthorizationToken(type: 'user' | 'admin') {
    return {
      'Authorization': type === 'user' ? this._userToken : this._adminToken,
    };
  }

  setAuthorizationToken(type: 'user' | 'admin') {
    const data = {
      headers: {
        'Authorization': type === 'user' ? this._userToken : this._adminToken,
      }
    } as SecurityDataType;
    console.log('api setSecurityData');
    this.setSecurityData(data);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // 有多種錯誤格式 XD
      const message = error.error.error_description;
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\\nMessage: ${message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
