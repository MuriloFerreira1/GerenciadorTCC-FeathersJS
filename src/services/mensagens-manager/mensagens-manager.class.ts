import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { mensagensManagerController } from './mensagens-manager.controller';

interface Data {
  acao: string;
  email: string;
  token: string;
}

interface ServiceOptions {}

export class mensagensManager{
  app: Application;
  options: ServiceOptions;

  constructor (options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create (data: Data, params?: Params): Promise<Data> {
    mensagensManagerController(data, this.app);
    return data;
  }
}
