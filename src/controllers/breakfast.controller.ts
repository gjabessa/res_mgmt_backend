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
import {Breakfast} from '../models';
import {BreakfastRepository} from '../repositories';

export class BreakfastController {
  constructor(
    @repository(BreakfastRepository)
    public breakfastRepository : BreakfastRepository,
  ) {}

  @post('/breakfasts', {
    responses: {
      '200': {
        description: 'Breakfast model instance',
        content: {'application/json': {schema: {'x-ts-type': Breakfast}}},
      },
    },
  })
  async create(@requestBody() breakfast: Breakfast): Promise<Breakfast> {
    return await this.breakfastRepository.create(breakfast);
  }

  @get('/breakfasts/count', {
    responses: {
      '200': {
        description: 'Breakfast model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Breakfast)) where?: Where,
  ): Promise<Count> {
    return await this.breakfastRepository.count(where);
  }

  @get('/breakfasts', {
    responses: {
      '200': {
        description: 'Array of Breakfast model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Breakfast}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Breakfast)) filter?: Filter,
  ): Promise<Breakfast[]> {
    return await this.breakfastRepository.find(filter);
  }

  @patch('/breakfasts', {
    responses: {
      '200': {
        description: 'Breakfast PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() breakfast: Breakfast,
    @param.query.object('where', getWhereSchemaFor(Breakfast)) where?: Where,
  ): Promise<Count> {
    return await this.breakfastRepository.updateAll(breakfast, where);
  }

  @get('/breakfasts/{id}', {
    responses: {
      '200': {
        description: 'Breakfast model instance',
        content: {'application/json': {schema: {'x-ts-type': Breakfast}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Breakfast> {
    return await this.breakfastRepository.findById(id);
  }

  @patch('/breakfasts/{id}', {
    responses: {
      '204': {
        description: 'Breakfast PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() breakfast: Breakfast,
  ): Promise<void> {
    await this.breakfastRepository.updateById(id, breakfast);
  }

  @put('/breakfasts/{id}', {
    responses: {
      '204': {
        description: 'Breakfast PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() breakfast: Breakfast,
  ): Promise<void> {
    await this.breakfastRepository.replaceById(id, breakfast);
  }

  @del('/breakfasts/{id}', {
    responses: {
      '204': {
        description: 'Breakfast DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.breakfastRepository.deleteById(id);
  }
}
