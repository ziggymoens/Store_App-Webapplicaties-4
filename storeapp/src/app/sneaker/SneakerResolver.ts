import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
import { Sneaker } from './models/sneaker.model';
import { SneakerDataService } from './dataServices/sneaker-data.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class SneakerResolver implements Resolve<Sneaker> {
    constructor(private sneakerDataService: SneakerDataService) {}
  
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<Sneaker> {
      return this.sneakerDataService.getSneaker$(route.params['id']);
    }
  }