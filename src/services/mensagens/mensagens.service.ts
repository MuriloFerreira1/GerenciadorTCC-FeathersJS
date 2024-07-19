// Initializes the `mensagens` service on path `/mensagens`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Mensagens } from './mensagens.class';
import hooks from './mensagens.hooks';


// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'mensagens': Mensagens & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate'),
  };

  // Initialize our service with any options it requires
  app.use('/mensagens', new Mensagens(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mensagens');

  service.hooks(hooks);
}
