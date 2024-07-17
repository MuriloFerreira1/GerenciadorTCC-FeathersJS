// Initializes the `projetos` service on path `/projetos`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Projetos } from './projetos.class';
import createModel from '../../models/projetos.model';
import hooks from './projetos.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'projetos': Projetos & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/projetos', new Projetos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('projetos');

  service.hooks(hooks);
}
