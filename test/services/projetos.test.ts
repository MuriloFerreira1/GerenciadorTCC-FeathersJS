import app from '../../src/app';

describe('\'projetos\' service', () => {
  it('registered the service', () => {
    const service = app.service('projetos');
    expect(service).toBeTruthy();
  });
});
