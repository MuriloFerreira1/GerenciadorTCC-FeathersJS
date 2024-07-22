import app from '../../src/app';

describe('\'mensgaensManager\' service', () => {
  it('registered the service', () => {
    const service = app.service('mensgaens-manager');
    expect(service).toBeTruthy();
  });
});
