import { Hook, HooksObject, Service } from '@feathersjs/feathers';
import * as feathersAuthentication from '@feathersjs/authentication'
import * as common from 'feathers-hooks-common';
import { HookContext } from '../../app';

type HookFunction = (hook: HookContext) => boolean;

const avaliaAcao = (...args : string[]):HookFunction=>(context: HookContext) : boolean => args.includes(context.data['action'])

const { authenticate } = feathersAuthentication.hooks;

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      common.iff((context) => avaliaAcao('alterarSenha')(<HookContext>context)
        /*(context)=> {
          if(context.data['action'] == 'passwordChange' || context.data['action'] == 'identityChange') {
            return true;
          }else{ return false}
        }*/,
        authenticate('jwt')
      )
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
