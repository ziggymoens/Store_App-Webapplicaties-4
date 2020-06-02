import { Pipe, PipeTransform } from '@angular/core';
import { Sneaker } from '../models/sneaker.model';

@Pipe({
  name: 'barcodeFilter'
})
export class BarcodeFilterPipe implements PipeTransform {

  transform(sneakers: Sneaker[], barcode: string): Sneaker[] {
    if(!barcode || barcode.length ===0){
      return sneakers;
    }
    return sneakers.filter(sneak => sneak.barcode.toLowerCase().startsWith(barcode.toLowerCase()));
  }


}
