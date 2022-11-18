import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  apiUrl: string = 'http://localhost:8080/marca';

  constructor(private http: HttpClient) {

   }

  save(model: any): Observable<any> {
    let API_URL = `${this.apiUrl}/save`;
    return this.http.post(API_URL, model).pipe(catchError(this.error));
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }


}
