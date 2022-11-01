import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {PersonaRepository} from '../repositories';
const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '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');


@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionCorreoElectronicoService {
  constructor(@repository(PersonaRepository)
  public persona: PersonaRepository,
  ) { }

  enviarCorreo() {
    sendgrid.send({
      to: 'juan.lopez1@utp.edu.co',
      from: 'ciprescool7@gmail.com',
      subject: 'notificacion acceso',
      text: 'prueba',
    });
  }
}
