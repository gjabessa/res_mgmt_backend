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
import {Queue} from '../models';
import {QueueRepository} from '../repositories';

export class QueueController {
  constructor(
    @repository(QueueRepository)
    public queueRepository : QueueRepository,
  ) {}

  @post('/queues', {
    responses: {
      '200': {
        description: 'Queue model instance',
        content: {'application/json': {schema: {'x-ts-type': Queue}}},
      },
    },
  })
  async create(@requestBody() queue: Queue): Promise<Queue> {
    return await this.queueRepository.create(queue);
  }

  @get('/queues/count', {
    responses: {
      '200': {
        description: 'Queue model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Queue)) where?: Where,
  ): Promise<Count> {
    return await this.queueRepository.count(where);
  }

  @get('/queues', {
    responses: {
      '200': {
        description: 'Array of Queue model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Queue}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Queue)) filter?: Filter,
  ): Promise<Queue[]> {
    return await this.queueRepository.find(filter);
  }

  @patch('/queues', {
    responses: {
      '200': {
        description: 'Queue PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() queue: Queue,
    @param.query.object('where', getWhereSchemaFor(Queue)) where?: Where,
  ): Promise<Count> {
    return await this.queueRepository.updateAll(queue, where);
  }

  @get('/queues/{id}', {
    responses: {
      '200': {
        description: 'Queue model instance',
        content: {'application/json': {schema: {'x-ts-type': Queue}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Queue> {
    return await this.queueRepository.findById(id);
  }

  @patch('/queues/{id}', {
    responses: {
      '204': {
        description: 'Queue PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() queue: Queue,
  ): Promise<void> {
    await this.queueRepository.updateById(id, queue);
  }

  @put('/queues/{id}', {
    responses: {
      '204': {
        description: 'Queue PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() queue: Queue,
  ): Promise<void> {
    await this.queueRepository.replaceById(id, queue);
  }

  @del('/queues/{id}', {
    responses: {
      '204': {
        description: 'Queue DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.queueRepository.deleteById(id);
  }
}
