import { Component, OnInit, Input } from '@angular/core';
import { Sneaker } from '../models/sneaker.model';
import { SneakerDataService } from '../dataServices/sneaker-data.service';

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css']
})
export class SneakerComponent implements OnInit {
  @Input() public sneaker: Sneaker;

  constructor(private _sneakerDataService: SneakerDataService) {}

  ngOnInit(): void {}

  deleteSneaker(){
    this._sneakerDataService.deleteSneaker(this.sneaker);
  }
}
