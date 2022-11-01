import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class NotificacionCorreoElectronico extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  asunto: string;

  @property({
    type: 'string',
    required: true,
  })
  correoDestino: string;

  @property({
    type: 'string',
    required: true,
  })
  mensaje: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<NotificacionCorreoElectronico>) {
    super(data);
  }
}

export interface NotificacionCorreoElectronicoRelations {
  // describe navigational properties here
}

export type NotificacionCorreoElectronicoWithRelations = NotificacionCorreoElectronico & NotificacionCorreoElectronicoRelations;
