import {DefaultCrudRepository} from '@loopback/repository';
import {Order} from '../models';
import {RestaurantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.id
> {
  constructor(
    @inject('datasources.restaurant') dataSource: RestaurantDataSource,
  ) {
    super(Order, dataSource);
  }
}
