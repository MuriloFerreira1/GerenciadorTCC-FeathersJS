import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import * as nodemailer from 'nodemailer'
import Mailer, { SMTPTransport } from 'feathers-mailer'

interface Data {}

interface ServiceOptions {}

export class Mensagens implements ServiceMethods<Data> {
  app: Application;
  options: ServiceOptions;
  transporter : any;
  constructor (options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
    this.setTransporter();
  }

  async setTransporter() : Promise<void>{
    const account = await nodemailer.createTestAccount(); // internet required
  
    this.transporter = nodemailer.createTransport({
      host: "smtp.freesmtpservers.com",
      port: 25,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find (params?: Params): Promise<Data[] | Paginated<Data>> {
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async get (id: Id, params?: Params): Promise<Data> {
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create (data: Data, params?: Params): Promise<Data> {
    
    const info = await this.transporter.sendMail(data)
    console.log(info.messageId)
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update (id: NullableId, data: Data, params?: Params): Promise<Data> {
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async patch (id: NullableId, data: Data, params?: Params): Promise<Data> {
    return data;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove (id: NullableId, params?: Params): Promise<Data> {
    return { id };
  }
}
