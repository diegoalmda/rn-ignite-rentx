import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class Car extends Model {
  static table = 'cars';

  @field('name')
  name!: string; // exclamação indica que sempre vai ter valor nesse campo

  @field('brand')
  brand!: string; 

  @field('about')
  about!: string; 

  @field('fuel_type')
  fuel_type!: string; 

  @field('period')
  period!: string; 

  @field('price')
  price!: string; 

  @field('thumbnail')
  thumbnail!: string; 
}

export { Car };