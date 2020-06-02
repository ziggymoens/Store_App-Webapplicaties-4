import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { Brand } from '../models/brand.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, shareReplay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandDataService {

  constructor(private http: HttpClient) { }

  get brands$(): Observable<Brand[]> {
    return this.http.get(`${environment.apiUrl}/Brands/`).pipe(
      //show loading message
      //delay(2000),
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Brand[] => list.map(Brand.fromJSON))
    );
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    return throwError(errorMessage);
  }
}
