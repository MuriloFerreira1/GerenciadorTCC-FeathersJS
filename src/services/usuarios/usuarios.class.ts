import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { ServiceSwaggerOptions } from 'feathers-swagger';

export class Usuarios extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  docs:ServiceSwaggerOptions={
    description: 'A service to send and receive messages',
  definitions: {
    usuarios: {
      "type": "object",
      "required": [
        "text"
      ],
      "properties": {
        "id": {
          "type": "number",
          "description": "o id do Usuario"
        }
      }
    }
  }}
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
