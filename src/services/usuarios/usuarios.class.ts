import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { ServiceSwaggerOptions } from 'feathers-swagger';

export class Usuarios extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  docs:ServiceSwaggerOptions={
    description: 'A service to send and receive messages',
    definitions: {
      messages: {
        "type": "object",
        "required": [
          "text"
        ],
        "properties": {
          "text": {
            "type": "string",
            "description": "The message text"
          },
          "useId": {
            "type": "string",
            "description": "The id of the user that send the message"
          }
        }
      }
    }
  };
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
