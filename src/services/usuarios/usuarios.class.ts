import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';
import { ServiceSwaggerOptions } from 'feathers-swagger';

export class Usuarios extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
  docs:ServiceSwaggerOptions={
    description: 'Serviço CRUD de usuários',
    definitions: {
      usuarios: {
        "type": "object",
        "required": [
          "text"
        ],
        "properties": {
          "id": {
            "type": "number",
            "description": "O id do usuário",
            "example": "0"
          },
          "nome":{
            "type": "string",
            "description" : "O nome do Usuário",
            "example": "Murilo"
          },
          "email":{
            "type": "string",
            "description" : "O email do Usuário",
            "example": "murilo@email.com"
          },
          "senha":{
            "type": "string",
            "description" : "A senha do Usuário",
            "example": "senha1234"
          },
          "CPF":{
            "type": "integer",
            "description": "O CPF do usuário",
            "example": "12345678910"
          },
        }
      }
    }
  };
}
