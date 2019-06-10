import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Lunch extends Entity {
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
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
  })
  image_large?: string;

  @property({
    type: 'number',
  })
  price?: number;


  constructor(data?: Partial<Lunch>) {
    super(data);
  }
}
