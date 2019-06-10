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
import {Lunch} from '../models';
import {LunchRepository} from '../repositories';

export class LunchController {
  constructor(
    @repository(LunchRepository)
    public lunchRepository : LunchRepository,
  ) {}

  @post('/lunches', {
    responses: {
      '200': {
        description: 'Lunch model instance',
        content: {'application/json': {schema: {'x-ts-type': Lunch}}},
      },
    },
  })
  async create(@requestBody() lunch: Lunch): Promise<Lunch> {
    return await this.lunchRepository.create(lunch);
  }

  @get('/lunches/count', {
    responses: {
      '200': {
        description: 'Lunch model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Lunch)) where?: Where,
  ): Promise<Count> {
    return await this.lunchRepository.count(where);
  }

  @get('/lunches', {
    responses: {
      '200': {
        description: 'Array of Lunch model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Lunch}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Lunch)) filter?: Filter,
  ): Promise<Lunch[]> {
    return await this.lunchRepository.find(filter);
  }

  @patch('/lunches', {
    responses: {
      '200': {
        description: 'Lunch PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() lunch: Lunch,
    @param.query.object('where', getWhereSchemaFor(Lunch)) where?: Where,
  ): Promise<Count> {
    return await this.lunchRepository.updateAll(lunch, where);
  }

  @get('/lunches/{id}', {
    responses: {
      '200': {
        description: 'Lunch model instance',
        content: {'application/json': {schema: {'x-ts-type': Lunch}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Lunch> {
    return await this.lunchRepository.findById(id);
  }

  @patch('/lunches/{id}', {
    responses: {
      '204': {
        description: 'Lunch PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() lunch: Lunch,
  ): Promise<void> {
    await this.lunchRepository.updateById(id, lunch);
  }

  @put('/lunches/{id}', {
    responses: {
      '204': {
        description: 'Lunch PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() lunch: Lunch,
  ): Promise<void> {
    await this.lunchRepository.replaceById(id, lunch);
  }

  @del('/lunches/{id}', {
    responses: {
      '204': {
        description: 'Lunch DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.lunchRepository.deleteById(id);
  }
}
