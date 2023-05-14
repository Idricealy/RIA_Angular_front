import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class Api {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  // GET request
  get(url: string): Observable<any> {
    const headers = this.getHeaders();

    return this.http.get(this.baseUrl + url, { headers: headers })
      .pipe(
        tap((response: any) => console.log(`GET ${url}:`, response)),
        catchError(this.handleError)
      );
  }

  // POST request
  post(url: string, body: any): Observable<any> {
    const headers = this.getHeaders();

    return this.http.post(this.baseUrl + url, body, { headers: headers })
      .pipe(
        tap((response: any) => console.log(`POST ${url}:`, response)),
        catchError(this.handleError)
      );
  }

  // PUT request
  put(url: string, body: any): Observable<any> {
    const headers = this.getHeaders();


    return this.http.put(this.baseUrl + url, body, { headers: headers })
      .pipe(
        tap((response: any) => console.log(`PUT ${url}:`, response)),
        catchError(this.handleError)
      );
  }

  // DELETE request
  delete(url: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(this.baseUrl + url, { headers: headers })
      .pipe(
        tap((response: any) => console.log(`DELETE ${url}:`, response)),
        catchError(this.handleError)
      );
  }

  // Handle errors
  private handleError(error: any): Observable<any> {
    console.error('API error:', error);
    return error;
  }

  // Get headers with token
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
}
