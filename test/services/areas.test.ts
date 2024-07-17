import app from '../../src/app';

describe('\'areas\' service', () => {
  it('registered the service', () => {
    const service = app.service('areas');
    expect(service).toBeTruthy();
  });
});
