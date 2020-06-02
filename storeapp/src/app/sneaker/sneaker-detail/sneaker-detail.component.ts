import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SneakerDataService } from '../dataServices/sneaker-data.service';
import { Sneaker } from '../models/sneaker.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../../user/authentication.service';



@Component({
  selector: 'app-sneaker-detail',
  templateUrl: './sneaker-detail.component.html',
  styleUrls: ['./sneaker-detail.component.css']
})
export class SneakerDetailComponent implements OnInit {
  public sneaker: Sneaker;
  public displayedColumns: string[] = ['Size', 'Amount'];
  public images: string[] = [];
  public currentImg: number;
  public value: number;
  public imgs: number[] = Array(36).fill(1);

  constructor(private route: ActivatedRoute,
    private router: Router,
    private sneakerDataService: SneakerDataService,
    private _snackBar: MatSnackBar,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(item => (this.sneaker = item['sneaker']));
    this.loadImg();
    this.currentImg = 0;
    this.value = 1;
  }

  deleteSneaker() {
    this.sneakerDataService.deleteSneaker(this.sneaker);
    this._snackBar.open(`Sneaker with name ${this.sneaker.name} has been succesfully deleted`, "close", { duration: 5000, });
    this.router.navigate(['/sneaker/list']);
  }

  loadImg() {
    for (let index = 0; index < 3; index++) {
        this.images.push(`../../../assets/images/sneakers/${this.sneakerImg()}${index}.jpg`);
    }
  }

  prevImg() {
    if (this.currentImg === 0) {
      this.currentImg = this.images.length - 1;
    } else {
      this.currentImg -= 1;
    }
  }

  nextImg() {
    if (this.currentImg === this.images.length - 1) {
      this.currentImg = 0;
    } else {
      this.currentImg += 1;
    }
  }

  sneakerBrandImg(): string {
    return this.sneaker.brand.name.replace(/[\s-]/g, "").toLowerCase();
  }

  sneakerImg(): string {
    return this.sneaker.name.replace(/[\s-]/g, "").toLowerCase() + this.sneaker.color.replace(/[\s-]/g, "").toLowerCase();
  }

  customer(): boolean{
    return this.auth.user$.value.startsWith('admin');
  }
}