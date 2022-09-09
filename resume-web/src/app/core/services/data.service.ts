import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Api, ApiConfig } from '../models/Api';

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

  getToken() {
    return this.request({
      path: '/connect/token',
      method: "POST",
      secure: true,
      format: "json",
      query: {
        __tenant: "Resume"
      }
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
