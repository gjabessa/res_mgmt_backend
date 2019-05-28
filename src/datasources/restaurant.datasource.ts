import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './restaurant.datasource.json';

export class RestaurantDataSource extends juggler.DataSource {
  static dataSourceName = 'restaurant';

  constructor(
    @inject('datasources.config.restaurant', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
