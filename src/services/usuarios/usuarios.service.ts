// Initializes the `usuarios` service on path `/usuarios`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Usuarios } from './usuarios.class';
import createModel from '../../models/usuarios.model';
import hooks from './usuarios.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'usuarios': Usuarios & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/usuarios', new Usuarios(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('usuarios');

  service.hooks(hooks);
}
