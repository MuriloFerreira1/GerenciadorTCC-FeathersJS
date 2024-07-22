// Initializes the `mensgaensManager` service on path `/mensgaens-manager`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { MensgaensManager } from './mensagens-manager.class';
import hooks from './mensagens-manager.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'mensgaens-manager': MensgaensManager & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/mensgaens-manager', new MensgaensManager(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('mensgaens-manager');

  service.hooks(hooks);
}
