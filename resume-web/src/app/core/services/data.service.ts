import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Api, ApiConfig, ContentType, VoloAbpHttpRemoteServiceErrorResponse } from '../models/Api';
import { loginRequestDto, loginResponseDto } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class DataService<SecurityDataType extends unknown> extends Api<SecurityDataType> {
  authenticationType: string = 'Bearer ';
  token: string = '';

  constructor(
    @Inject('API_BASE_URL') apiBaseUrl: string
    ) {
      super({
        baseUrl: apiBaseUrl
      } as ApiConfig)
  }

  getToken(username: string, password: string) {
    return this.request<loginResponseDto, VoloAbpHttpRemoteServiceErrorResponse>({
      path: '/connect/token',
      method: "POST",
      query: {
        __tenant: 'Resume'
      },
      body: {
        Client_id: 'Resume_App',
        Client_secret: '1q2w3e*',
        username: username,
        password: password,
        scope: 'Resume',
        grant_type: 'password',
      } as loginRequestDto,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
    });
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\\nMessage: ${error.message}`;
    }
    // TODO: show Error Toast
    return throwError(() => new Error('errorMessage'));
  }
}
