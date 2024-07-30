import { ServiceAddons } from '@feathersjs/feathers';
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication';
import { LocalStrategy } from '@feathersjs/authentication-local';
import { expressOauth } from '@feathersjs/authentication-oauth';

import { Application } from './declarations';
import { ServiceSwaggerOptions } from 'feathers-swagger';

declare module './declarations' {
  interface ServiceTypes {
    'authentication': AuthenticationService & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  const docs: ServiceSwaggerOptions = {
    description: 'Serviço de autenticação de usuários',
    definitions: {
      usuarios: {
        "type": "object",
        "required": [
          "text"
        ],
        "properties": {
          "email": {
            "type": "string",
            "description": "O email do Usuário",
            "example": "murilo@email.com"
          },
          "senha": {
            "type": "string",
            "description": "A senha do Usuário",
            "example": "senha1234"
          }
        }
      }
    }
  };



  app.use('/authentication', authentication);
  app.configure(expressOauth());
}
