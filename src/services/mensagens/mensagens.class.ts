import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import * as nodemailer from 'nodemailer'
import Mailer, { SMTPTransport } from 'feathers-mailer'

interface Data {}

interface ServiceOptions {}

const user = nodemailer.createTestAccount();

export class Mensagens{
  app: Application;
  options: ServiceOptions;
  transporter = nodemailer.createTransport({
    host: "smtp.freesmtpservers.com",
    port: 25,
  });
  constructor (options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create (data: Data, params?: Params): Promise<Data> {
    
    const info = await this.transporter.sendMail(data)
    console.log(info.messageId)
    return data;
  }


}
