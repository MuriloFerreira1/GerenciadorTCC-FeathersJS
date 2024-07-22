// Initializes the `mensagensManager` service on path `/mensagens-manager`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { mensagensManager } from './mensagens-manager.class';
import hooks from './mensagens-manager.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'mensagens-manager': mensagensManager & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mensagens-manager', new mensagensManager(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mensagens-manager');

  service.hooks(hooks);
}
