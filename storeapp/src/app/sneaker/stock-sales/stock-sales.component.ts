import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from '../models/stock.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-stock-sales',
  templateUrl: './stock-sales.component.html',
  styleUrls: ['./stock-sales.component.css']
})
export class StockSalesComponent implements OnInit {
  @Input() stock: Stock[];
  public displayedColumns: string[] = ['size', 'amount'];
  public dataSource: MatTableDataSource<Stock>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<Stock>(this.stock);
  }

  ngOnInit(): void {this.dataSource = new MatTableDataSource(this.stock.sort((s1, s2) => s1.size - s2.size));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
