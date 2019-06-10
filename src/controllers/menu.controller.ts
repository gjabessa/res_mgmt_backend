import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Foods } from '../models';
import { FoodsRepository } from '../repositories';

export class MenuController {
  constructor(
    @repository(FoodsRepository)
    public foodsRepository: FoodsRepository,
  ) { }

  @post('/foods', {
    responses: {
      '200': {
        description: 'Foods model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Foods } } },
      },
    },
  })
  async create(@requestBody() foods: Foods): Promise<Foods> {
    return await this.foodsRepository.create(foods);
  }

  @get('/foods/count', {
    responses: {
      '200': {
        description: 'Foods model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Foods)) where?: Where,
  ): Promise<Count> {
    return await this.foodsRepository.count(where);
  }

  @get('/dinner', {
    responses: {
      '200': {
        description: 'Array of Foods model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Foods } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Foods)) filter?: Filter,
  ): Promise<Foods[]> {
    return await this.foodsRepository.find(filter);
  }

  @patch('/foods', {
    responses: {
      '200': {
        description: 'Foods PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() foods: Foods,
    @param.query.object('where', getWhereSchemaFor(Foods)) where?: Where,
  ): Promise<Count> {
    return await this.foodsRepository.updateAll(foods, where);
  }

  @get('/foods/{id}', {
    responses: {
      '200': {
        description: 'Foods model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Foods } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Foods> {
    return await this.foodsRepository.findById(id);
  }

  @patch('/foods/{id}', {
    responses: {
      '204': {
        description: 'Foods PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() foods: Foods,
  ): Promise<void> {
    await this.foodsRepository.updateById(id, foods);
  }

  @put('/foods/{id}', {
    responses: {
      '204': {
        description: 'Foods PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() foods: Foods,
  ): Promise<void> {
    await this.foodsRepository.replaceById(id, foods);
  }

  @del('/foods/{id}', {
    responses: {
      '204': {
        description: 'Foods DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.foodsRepository.deleteById(id);
  }
}
