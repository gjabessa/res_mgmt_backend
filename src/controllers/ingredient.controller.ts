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
import {Ingredient} from '../models';
import {IngredientRepository} from '../repositories';

export class IngredientController {
  constructor(
    @repository(IngredientRepository)
    public ingredientRepository : IngredientRepository,
  ) {}

  @post('/ingredients', {
    responses: {
      '200': {
        description: 'Ingredient model instance',
        content: {'application/json': {schema: {'x-ts-type': Ingredient}}},
      },
    },
  })
  async create(@requestBody() ingredient: Ingredient): Promise<Ingredient> {
    return await this.ingredientRepository.create(ingredient);
  }

  @get('/ingredients/count', {
    responses: {
      '200': {
        description: 'Ingredient model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Ingredient)) where?: Where,
  ): Promise<Count> {
    return await this.ingredientRepository.count(where);
  }

  @get('/ingredients', {
    responses: {
      '200': {
        description: 'Array of Ingredient model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Ingredient}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Ingredient)) filter?: Filter,
  ): Promise<Ingredient[]> {
    return await this.ingredientRepository.find(filter);
  }

  @patch('/ingredients', {
    responses: {
      '200': {
        description: 'Ingredient PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() ingredient: Ingredient,
    @param.query.object('where', getWhereSchemaFor(Ingredient)) where?: Where,
  ): Promise<Count> {
    return await this.ingredientRepository.updateAll(ingredient, where);
  }

  @get('/ingredients/{id}', {
    responses: {
      '200': {
        description: 'Ingredient model instance',
        content: {'application/json': {schema: {'x-ts-type': Ingredient}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Ingredient> {
    return await this.ingredientRepository.findById(id);
  }

  @patch('/ingredients/{id}', {
    responses: {
      '204': {
        description: 'Ingredient PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() ingredient: Ingredient,
  ): Promise<void> {
    await this.ingredientRepository.updateById(id, ingredient);
  }

  @put('/ingredients/{id}', {
    responses: {
      '204': {
        description: 'Ingredient PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ingredient: Ingredient,
  ): Promise<void> {
    await this.ingredientRepository.replaceById(id, ingredient);
  }

  @del('/ingredients/{id}', {
    responses: {
      '204': {
        description: 'Ingredient DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ingredientRepository.deleteById(id);
  }
}
