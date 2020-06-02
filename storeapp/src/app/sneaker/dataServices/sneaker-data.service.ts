import { Injectable } from '@angular/core';
//import { SNEAKERS } from './mock-sneakers';
import { map, catchError, tap, shareReplay, switchMap, delay, scan } from 'rxjs/operators';
import { Sneaker } from '../models/sneaker.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe, throwError, BehaviorSubject, of, Subject, merge } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SneakerDataService {
  private _sneakers$ = new BehaviorSubject<Sneaker[]>([]);
  private _sneakers: Sneaker[];

  constructor(private http: HttpClient) {
    this.sneakers$.pipe(
      catchError((err) => {
        console.log('error got here');
        this._sneakers$.error(err);
        return throwError(err);
      })
    ).subscribe((sneakers: Sneaker[]) => {
      this._sneakers = sneakers;
      this._sneakers$.next(this._sneakers);
    })
  }

  get allSneakers$(): Observable<Sneaker[]> {
    return this._sneakers$;
  }

  get sneakers$(): Observable<Sneaker[]> {
    return this.http.get(`${environment.apiUrl}/Sneakers/`).pipe(
      //show loading message
      //delay(2000),
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Sneaker[] => list.map(Sneaker.fromJSON))
    );
  }

  getSneaker$(id: string): Observable<Sneaker> {
    return this.http
      .get(`${environment.apiUrl}/Sneakers/${id}`)
      .pipe(catchError(this.handleError), map(Sneaker.fromJSON)); // returns just one sneaker, as json
  }

  addNewSneaker(sneaker: Sneaker) {
    return this.http
      .post(`${environment.apiUrl}/Sneakers/`, sneaker.toJSON())
      .pipe(catchError(this.handleError), map(Sneaker.fromJSON))
      .pipe(catchError((err) => {
        this._sneakers$.error(err);
        return throwError(err);
      }),
      tap((sneak: Sneaker) => {
        this._sneakers = [...this._sneakers, sneak];
        this._sneakers$.next(this._sneakers);
      })
      );
  }

  deleteSneaker(sneaker: Sneaker) {
    return this.http
      .delete(`${environment.apiUrl}/Sneakers/${sneaker.id}`)
      .pipe(tap(console.log), catchError(this.handleError))
      .subscribe(() => {
        this._sneakers = this._sneakers.filter((sneak) => sneak.id != sneaker.id);
        this._sneakers$.next(this._sneakers);
      });
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

  /*
    USEAGE WITH MOCK JSON OBJ
  
    private _sneakers = SNEAKERS
    get sneakers(): Sneaker[]{
      return this._sneakers;
    }
  
    addNewSneaker(sneaker: Sneaker){
      this._sneakers = [...this._sneakers, sneaker];
    }
  */


}
