import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MaterialModule } from "./../material/material.module";
import { SneakerComponent } from './sneaker/sneaker.component';
import { BrandComponent } from './brand/brand.component';
import { SneakerListComponent } from './sneaker-list/sneaker-list.component';
import { AddSneakerComponent } from './add-sneaker/add-sneaker.component';
import { SneakerFilterPipe } from './filters/sneaker-filter.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SneakerDetailComponent } from './sneaker-detail/sneaker-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { SneakerResolver } from "./SneakerResolver";
import { StockSalesComponent } from './stock-sales/stock-sales.component';
import { BrandFilterPipe } from './filters/brand-filter.pipe'
import { NgxBarcode6Module } from 'ngx-barcode6';
import { SneakerScanComponent } from './sneaker-scan/sneaker-scan.component';
import { BarcodeFilterPipe } from './filters/barcode-filter.pipe';


const routes: Routes= [
  {path: 'list', component: SneakerListComponent},
  {path: 'add', component: AddSneakerComponent},
  {path: 'scan', component: SneakerScanComponent},
  {
    path: 'detail/:id', 
    component: SneakerDetailComponent, 
    resolve: { sneaker: SneakerResolver},
  }
]


@NgModule({
  declarations: [SneakerComponent, BrandComponent, SneakerListComponent, AddSneakerComponent, SneakerFilterPipe, SneakerDetailComponent, StockSalesComponent, BrandFilterPipe, SneakerScanComponent, BarcodeFilterPipe],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule,RouterModule.forChild(routes), NgxBarcode6Module, ],
  exports: [AddSneakerComponent, SneakerListComponent, SneakerScanComponent]
})
export class SneakerModule {}
