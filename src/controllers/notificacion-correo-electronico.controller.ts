import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {NotificacionCorreoElectronico} from '../models';
import {NotificacionCorreoElectronicoRepository} from '../repositories';
export class NotificacionCorreoElectronicoController {
  constructor(
    @repository(NotificacionCorreoElectronicoRepository)
    public notificacionCorreoElectronicoRepository: NotificacionCorreoElectronicoRepository,
  ) { }

  @post('/notificacion-correo-electronicos')
  @response(200, {
    description: 'NotificacionCorreoElectronico model instance',
    content: {'application/json': {schema: getModelSchemaRef(NotificacionCorreoElectronico)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotificacionCorreoElectronico, {
            title: 'NewNotificacionCorreoElectronico',
            exclude: ['id'],
          }),
        },
      },
    })
    notificacionCorreoElectronico: Omit<NotificacionCorreoElectronico, 'id'>,
  ): Promise<NotificacionCorreoElectronico> {
    return this.notificacionCorreoElectronicoRepository.create(notificacionCorreoElectronico);
  }

  @get('/notificacion-correo-electronicos/count')
  @response(200, {
    description: 'NotificacionCorreoElectronico model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(NotificacionCorreoElectronico) where?: Where<NotificacionCorreoElectronico>,
  ): Promise<Count> {
    return this.notificacionCorreoElectronicoRepository.count(where);
  }

  @get('/notificacion-correo-electronicos')
  @response(200, {
    description: 'Array of NotificacionCorreoElectronico model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(NotificacionCorreoElectronico, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(NotificacionCorreoElectronico) filter?: Filter<NotificacionCorreoElectronico>,
  ): Promise<NotificacionCorreoElectronico[]> {
    return this.notificacionCorreoElectronicoRepository.find(filter);
  }

  @patch('/notificacion-correo-electronicos')
  @response(200, {
    description: 'NotificacionCorreoElectronico PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotificacionCorreoElectronico, {partial: true}),
        },
      },
    })
    notificacionCorreoElectronico: NotificacionCorreoElectronico,
    @param.where(NotificacionCorreoElectronico) where?: Where<NotificacionCorreoElectronico>,
  ): Promise<Count> {
    return this.notificacionCorreoElectronicoRepository.updateAll(notificacionCorreoElectronico, where);
  }

  @get('/notificacion-correo-electronicos/{id}')
  @response(200, {
    description: 'NotificacionCorreoElectronico model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(NotificacionCorreoElectronico, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(NotificacionCorreoElectronico, {exclude: 'where'}) filter?: FilterExcludingWhere<NotificacionCorreoElectronico>
  ): Promise<NotificacionCorreoElectronico> {
    return this.notificacionCorreoElectronicoRepository.findById(id, filter);
  }

  @patch('/notificacion-correo-electronicos/{id}')
  @response(204, {
    description: 'NotificacionCorreoElectronico PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotificacionCorreoElectronico, {partial: true}),
        },
      },
    })
    notificacionCorreoElectronico: NotificacionCorreoElectronico,
  ): Promise<void> {
    await this.notificacionCorreoElectronicoRepository.updateById(id, notificacionCorreoElectronico);
  }

  @put('/notificacion-correo-electronicos/{id}')
  @response(204, {
    description: 'NotificacionCorreoElectronico PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() notificacionCorreoElectronico: NotificacionCorreoElectronico,
  ): Promise<void> {
    await this.notificacionCorreoElectronicoRepository.replaceById(id, notificacionCorreoElectronico);
  }

  @del('/notificacion-correo-electronicos/{id}')
  @response(204, {
    description: 'NotificacionCorreoElectronico DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.notificacionCorreoElectronicoRepository.deleteById(id);
  }
}
