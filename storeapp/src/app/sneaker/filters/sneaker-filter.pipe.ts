import { Pipe, PipeTransform } from '@angular/core';
import { Sneaker } from '../models/sneaker.model';

@Pipe({
  name: 'sneakerFilter'
})
export class SneakerFilterPipe implements PipeTransform {

  transform(sneakers: Sneaker[], name: string): Sneaker[] {
    if(!name || name.length ===0){
      return sneakers;
    }
    return sneakers.filter(sneak => sneak.name.toLowerCase().includes(name.toLowerCase()));
  }

}
