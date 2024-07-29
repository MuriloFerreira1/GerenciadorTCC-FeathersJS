import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { ServiceSwaggerOptions } from 'feathers-swagger';

export class Usuarios extends Service {
  docs: ServiceSwaggerOptions = {
    description:'teste',
  }
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
