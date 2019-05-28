import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Foods extends Entity {
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
  image?: string;


  constructor(data?: Partial<Foods>) {
    super(data);
  }
}
