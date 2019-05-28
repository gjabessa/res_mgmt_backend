import {DefaultCrudRepository} from '@loopback/repository';
import {Drinks} from '../models';
import {RestaurantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DrinksRepository extends DefaultCrudRepository<
  Drinks,
  typeof Drinks.prototype.id
> {
  constructor(
    @inject('datasources.restaurant') dataSource: RestaurantDataSource,
  ) {
    super(Drinks, dataSource);
  }
}
