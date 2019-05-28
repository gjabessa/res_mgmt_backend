import {DefaultCrudRepository} from '@loopback/repository';
import {Foods} from '../models';
import {RestaurantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FoodsRepository extends DefaultCrudRepository<
  Foods,
  typeof Foods.prototype.id
> {
  constructor(
    @inject('datasources.restaurant') dataSource: RestaurantDataSource,
  ) {
    super(Foods, dataSource);
  }
}
