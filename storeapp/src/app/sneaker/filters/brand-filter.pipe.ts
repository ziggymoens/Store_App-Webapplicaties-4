import { Pipe, PipeTransform } from '@angular/core';
import { Sneaker } from '../models/sneaker.model';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(sneakers: Sneaker[], name: string): Sneaker[] {
    if(!name || name.length ===0){
      return sneakers;
    }
    return sneakers.filter(sneak => sneak.brand.name.toLowerCase().includes(name.toLowerCase()));
  }

}
