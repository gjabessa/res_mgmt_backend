import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Breakfast extends Entity {
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
    type: 'string',
  })
  image?: string;

  @property({
    type: 'string',
  })
  image_large?: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Breakfast>) {
    super(data);
  }
}
