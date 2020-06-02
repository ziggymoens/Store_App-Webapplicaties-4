import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sneaker } from '../models/sneaker.model';
import { Brand } from '../models/brand.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SneakerDataService } from '../dataServices/sneaker-data.service';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { BrandDataService } from '../dataServices/brand-data.service';


@Component({
  selector: 'app-add-sneaker',
  templateUrl: './add-sneaker.component.html',
  styleUrls: ['./add-sneaker.component.css'],
})
export class AddSneakerComponent implements OnInit {
  //@Output() public newSneaker = new EventEmitter<Sneaker>();
  public sneaker: FormGroup
  public errorMessage: string = '';
  public confirmationMessage: string= '';

  private _fetchBrands$: Observable<Brand[]>;
  public readonly brands = ['Adidas', 'Nike', 'Off-White', 'Supreme'];
  public selectedBrand: string = '';

  
  clearForm(){
    this.sneaker = this.fb.group({
      name: [[Validators.required, Validators.minLength(2)]],
      price: [[Validators.required, Validators.min(0)]],
      color: [[Validators.required, Validators.minLength(2)]],
      brand: [[Validators.required, Validators.minLength(2)]],
      releaseDate: [new Date()],
      barcode: [[Validators.required, Validators.minLength(2)]],
    })
    this.selectedBrand='';
    this.sneaker.reset();
  }


  constructor(
    private fb: FormBuilder,
    private _sneakerDataService: SneakerDataService,
    private _brandDataService: BrandDataService) { }

  ngOnInit(): void {
    this._fetchBrands$ = this._brandDataService.brands$.pipe(
      catchError((err) => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
    this.clearForm();
  }

  get brands$() : Observable<Brand[]>{
    return this._fetchBrands$;
  }

  onSubmit(){
    //this.newSneaker.emit(new Sneaker(this.sneaker.value.name,  this.sneaker.value.price, this.sneaker.value.color, new Brand(this.sneaker.value.brand),this.sneaker.value.releaseDate));
    //this._sneakerDataService.addNewSneaker(new Sneaker(this.sneaker.value.name,  this.sneaker.value.price, this.sneaker.value.color, new Brand(this.sneaker.value.brand),this.sneaker.value.releaseDate));
    this._sneakerDataService
      .addNewSneaker(new Sneaker(this.sneaker.value.name,  this.sneaker.value.price, this.sneaker.value.color, new Brand(this.sneaker.value.brand.name),this.sneaker.value.releaseDate, this.sneaker.value.barcode))
      .pipe(
        catchError((err) => {
          this.errorMessage = err;
          return EMPTY;
        })
      )
      .subscribe((sneak: Sneaker) => {
        this.confirmationMessage = `a sneaker with name ${sneak.name} has been succesfully added.`
      });
    this.clearForm();
  }

  getErrorMessage(errors: any): string {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${errors.minlength.requiredLength} 
        characters (got ${errors.minlength.actualLength})`;
    }else if (errors.min) {
      console.log(errors)
      return `can not be lower then ${errors.min.min} 
        and is ${errors.min.actual}`;
  }
}

changeBrand(value: Brand){
  this.selectedBrand = value.name;
}

sneakerBrandImg(): string{
  let name = this.selectedBrand;
  return name.replace(/[\s-]/g, "").toLowerCase();
}
sneakerImg(): string{
  let name : string = this.sneaker.value.name;
  let color : string = this.sneaker.value.color;
  return name.replace(/[\s-]/g, "").toLowerCase() + color.replace(/[\s-]/g, "").toLowerCase()+".jpg";
}

clearMessage(){
  this.errorMessage='';
  this.confirmationMessage='';
}

  /*
  addSneaker(sneakerName: HTMLInputElement): boolean {
    const sneaker = new Sneaker(sneakerName.value,  0, "Unknown", new Brand("Unknown"),new Date());
    this.newSneaker.emit(sneaker);
    return false;
  }
  */
}
