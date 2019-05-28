import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'date',
    default: Date.now(),
  })
  time?: string;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}
