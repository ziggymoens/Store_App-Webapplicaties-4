import { Component, OnInit } from '@angular/core';
import { SneakerDataService } from '../dataServices/sneaker-data.service';
import { catchError, map, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { EMPTY, Subject, Observable } from 'rxjs';
import { Sneaker } from '../models/sneaker.model';


@Component({
  selector: 'app-sneaker-scan',
  templateUrl: './sneaker-scan.component.html',
  styleUrls: ['./sneaker-scan.component.css']
})
export class SneakerScanComponent implements OnInit {
  public filterSneakerBarcode: string;
  public filterSneaker$ = new Subject<string>();
  private _fetchSneakers$: Observable<Sneaker[]>;
  public errorMessage: any;
  public displayedColumns: string[] = ['Name', 'Brand', 'Color', 'Barcode', 'Details'];

  constructor(private _sneakerDataService: SneakerDataService) {
    this.filterSneaker$.pipe(distinctUntilChanged(), debounceTime(400), map(val => val.toLowerCase())).subscribe(val => (this.filterSneakerBarcode = val));
  }

  ngOnInit(): void {
    this._fetchSneakers$ = this._sneakerDataService.allSneakers$.pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

  applyFilter(filter: string){
    this.filterSneakerBarcode = filter;
  }

  get sneakers$(): Observable<Sneaker[]> {
    return this._fetchSneakers$;
  }

}
