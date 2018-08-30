import { ContactPointModule } from './contact-point.module';

describe('AboutModule', () => {
  let aboutModule: ContactPointModule;

  beforeEach(() => {
    aboutModule = new ContactPointModule();
  });

  it('should create an instance', () => {
    expect(aboutModule).toBeTruthy();
  });
});
