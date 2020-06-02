import { Component, OnInit, ViewChild } from '@angular/core';
import { Sneaker } from '../models/sneaker.model';
import { SneakerDataService } from '../dataServices/sneaker-data.service';
import { Subject, Observable, EMPTY } from 'rxjs';
import {
  distinctUntilChanged,
  debounceTime,
  map,
  filter,
  catchError
} from 'rxjs/operators';

@Component({
  selector: 'app-sneaker-list',
  templateUrl: './sneaker-list.component.html',
  styleUrls: ['./sneaker-list.component.css']
})
export class SneakerListComponent implements OnInit {
  public filterSneakerName: string;
  public filterSneaker$ = new Subject<string>();
  private _fetchSneakers$: Observable<Sneaker[]>;
  public errorMessage: string = '';

  public displayedColumns: string[] = ['Name', 'Brand', 'Color', 'Price', 'Details'];
  public view: string;
  public views: string[] = ["Cards", "Table"];
  public filterBrandName: string;
  public filterBrand$ = new Subject<string>();

  //datasource = new MatTableDataSource<Sneaker>();
  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  //@ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _sneakerDataService: SneakerDataService) {
    this.filterSneaker$.pipe(distinctUntilChanged(), debounceTime(400), map(val => val.toLowerCase())).subscribe(val => (this.filterSneakerName = val));
    this.filterBrand$.pipe(distinctUntilChanged(), debounceTime(400), map(val => val.toLowerCase())).subscribe(val => (this.filterBrandName = val));
  }

  ngOnInit(): void {
    this._fetchSneakers$ = this._sneakerDataService.allSneakers$.pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );

    this.view = "Cards";
    /*
    this.sneakers$.subscribe(sneaker => {
      this.datasource.data = sneaker;
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    })
    */
  }

  applyFilter(filter: string){
    this.filterSneakerName = filter;
    this.filterBrandName = filter;
  }


  get sneakers$(): Observable<Sneaker[]> {
    return this._fetchSneakers$;
  }

/*
  addNewSneaker(sneaker) {
    console.log(sneaker)
    this._sneakerDataService
      .addNewSneaker(sneaker);
  }
  */
}
