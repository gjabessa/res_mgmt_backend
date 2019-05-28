import {DefaultCrudRepository} from '@loopback/repository';
import {Queue} from '../models';
import {RestaurantDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class QueueRepository extends DefaultCrudRepository<
  Queue,
  typeof Queue.prototype.id
> {
  constructor(
    @inject('datasources.restaurant') dataSource: RestaurantDataSource,
  ) {
    super(Queue, dataSource);
  }
}
