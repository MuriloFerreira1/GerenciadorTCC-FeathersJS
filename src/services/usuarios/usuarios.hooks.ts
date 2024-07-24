import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
import enviaEmailVerificacao from '../../hooks/envia-email-verificacao';
import * as hooks from 'feathers-hooks-common'
import * as verify from 'feathers-authentication-management';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ 
      hooks.iff(hooks.isProvider('external'),
        hooks.discard('isVerified',
        'verifyToken',
        'verifyShortToken',
        'verifyExpires',
        'verifyChanges',
        'resetToken',
        'resetExpires'
        )
      ),
      hashPassword('senha'),
      //verify.removeVerification(),
    ],
    update: [ 
      hooks.iff(hooks.isProvider('external'),
        hooks.discard('isVerified',
        'verifyToken',
        'verifyShortToken',
        'verifyExpires',
        'verifyChanges',
        'resetToken',
        'resetExpires'
        )
      ),
      hashPassword('senha'),  
      authenticate('jwt'),
      hooks.iff(
        hooks.isProvider('external'),
        hooks.preventChanges(
          false,
          'email'
        )
      ) 
    ],
    patch: [ 
      hooks.iff(hooks.isProvider('external'),
        hooks.discard('isVerified',
        'verifyToken',
        'verifyShortToken',
        'verifyExpires',
        'verifyChanges',
        'resetToken',
        'resetExpires'
        )
      ),
      hashPassword('senha'),  
      authenticate('jwt') 
    ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      protect('senha')
    ],
    find: [],
    get: [],
    create: [
      verify.hooks.removeVerification(),
      enviaEmailVerificacao()
    ],
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
