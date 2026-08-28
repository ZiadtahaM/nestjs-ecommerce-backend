import { AppController } from './app.controller';

describe('AppController', () => {
  it('reports the service health without exposing runtime configuration', () => {
    const controller = new AppController();

    expect(controller.health()).toEqual({
      status: 'ok',
      service: 'nestjs-ecommerce-backend',
    });
  });
});
