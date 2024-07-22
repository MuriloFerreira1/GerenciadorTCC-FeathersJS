import { Hook, HooksObject } from '@feathersjs/feathers';
import * as feathersAuthentication from '@feathersjs/authentication'
import * as common from 'feathers-hooks-common';
import { HookContext } from '../../app';

type HookFunction = (hook: HookContext) => boolean;

const { authenticate } = feathersAuthentication.hooks;

const isAction = (...args: string[]):HookFunction => (hook: HookContext): boolean => {
  return args.includes(hook.data.action);
};

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      /*
      common.iff(isAction('passwordChange', 'identityChange'),
        authenticate('jwt')
      )*/
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
