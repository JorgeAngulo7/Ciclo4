import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Notificaciones extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  menasajeTexto: string;

  @property({
    type: 'string',
  })
  mensajeCorreo?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Notificaciones>) {
    super(data);
  }
}

export interface NotificacionesRelations {
  // describe navigational properties here
}

export type NotificacionesWithRelations = Notificaciones & NotificacionesRelations;
