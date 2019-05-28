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
import {Drinks} from '../models';
import {DrinksRepository} from '../repositories';

export class DrinksController {
  constructor(
    @repository(DrinksRepository)
    public drinksRepository : DrinksRepository,
  ) {}

  @post('/drinks', {
    responses: {
      '200': {
        description: 'Drinks model instance',
        content: {'application/json': {schema: {'x-ts-type': Drinks}}},
      },
    },
  })
  async create(@requestBody() drinks: Drinks): Promise<Drinks> {
    return await this.drinksRepository.create(drinks);
  }

  @get('/drinks/count', {
    responses: {
      '200': {
        description: 'Drinks model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Drinks)) where?: Where,
  ): Promise<Count> {
    return await this.drinksRepository.count(where);
  }

  @get('/drinks', {
    responses: {
      '200': {
        description: 'Array of Drinks model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Drinks}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Drinks)) filter?: Filter,
  ): Promise<Drinks[]> {
    return await this.drinksRepository.find(filter);
  }

  @patch('/drinks', {
    responses: {
      '200': {
        description: 'Drinks PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() drinks: Drinks,
    @param.query.object('where', getWhereSchemaFor(Drinks)) where?: Where,
  ): Promise<Count> {
    return await this.drinksRepository.updateAll(drinks, where);
  }

  @get('/drinks/{id}', {
    responses: {
      '200': {
        description: 'Drinks model instance',
        content: {'application/json': {schema: {'x-ts-type': Drinks}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Drinks> {
    return await this.drinksRepository.findById(id);
  }

  @patch('/drinks/{id}', {
    responses: {
      '204': {
        description: 'Drinks PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() drinks: Drinks,
  ): Promise<void> {
    await this.drinksRepository.updateById(id, drinks);
  }

  @put('/drinks/{id}', {
    responses: {
      '204': {
        description: 'Drinks PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() drinks: Drinks,
  ): Promise<void> {
    await this.drinksRepository.replaceById(id, drinks);
  }

  @del('/drinks/{id}', {
    responses: {
      '204': {
        description: 'Drinks DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.drinksRepository.deleteById(id);
  }
}
