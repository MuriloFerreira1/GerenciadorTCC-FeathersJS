import app from '../../src/app';

describe('\'mensagensManager\' service', () => {
  it('registered the service', () => {
    const service = app.service('mensagens-manager');
    expect(service).toBeTruthy();
  });
});
