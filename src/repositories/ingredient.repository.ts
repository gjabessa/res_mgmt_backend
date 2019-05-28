import {DefaultCrudRepository} from '@loopback/repository';
import {Ingredient} from '../models';
import {RestaurantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class IngredientRepository extends DefaultCrudRepository<
  Ingredient,
  typeof Ingredient.prototype.id
> {
  constructor(
    @inject('datasources.restaurant') dataSource: RestaurantDataSource,
  ) {
    super(Ingredient, dataSource);
  }
}
