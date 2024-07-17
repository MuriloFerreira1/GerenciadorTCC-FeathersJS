import app from '../../src/app';

describe('\'usuarios\' service', () => {
  it('registered the service', () => {
    const service = app.service('usuarios');
    expect(service).toBeTruthy();
  });
});
