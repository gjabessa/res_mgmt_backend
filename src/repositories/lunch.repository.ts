import {DefaultCrudRepository} from '@loopback/repository';
import {Lunch} from '../models';
import {RestaurantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LunchRepository extends DefaultCrudRepository<
  Lunch,
  typeof Lunch.prototype.id
> {
  constructor(
    @inject('datasources.restaurant') dataSource: RestaurantDataSource,
  ) {
    super(Lunch, dataSource);
  }
}
