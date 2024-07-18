// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';
import app from '../app';
import * as nodemailer from 'nodemailer'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {
    const email = {
      to: context.data['email'],
      subject: 'Verificação de Conta',
      html: 'Corpo do email'
    }
    await app.service('mensagens').create(email);
    return context;
  };
};
