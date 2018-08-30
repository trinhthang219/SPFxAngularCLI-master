import { CustomerModule } from './customer.module';

describe('AboutModule', () => {
  let aboutModule: CustomerModule;

  beforeEach(() => {
    aboutModule = new CustomerModule();
  });

  it('should create an instance', () => {
    expect(aboutModule).toBeTruthy();
  });
});
