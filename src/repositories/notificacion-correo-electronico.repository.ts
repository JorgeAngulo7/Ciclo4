import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {NotificacionCorreoElectronico, NotificacionCorreoElectronicoRelations} from '../models';

export class NotificacionCorreoElectronicoRepository extends DefaultCrudRepository<
  NotificacionCorreoElectronico,
  typeof NotificacionCorreoElectronico.prototype.id,
  NotificacionCorreoElectronicoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(NotificacionCorreoElectronico, dataSource);
  }
}
