import app from '../../src/app';

describe('\'mensagens\' service', () => {
  it('registered the service', () => {
    const service = app.service('mensagens');
    expect(service).toBeTruthy();
  });
});
