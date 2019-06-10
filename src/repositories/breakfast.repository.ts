import {DefaultCrudRepository} from '@loopback/repository';
import {Breakfast} from '../models';
import {RestaurantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BreakfastRepository extends DefaultCrudRepository<
  Breakfast,
  typeof Breakfast.prototype.id
> {
  constructor(
    @inject('datasources.restaurant') dataSource: RestaurantDataSource,
  ) {
    super(Breakfast, dataSource);
  }
}
