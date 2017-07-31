import { MaterialTestAppPage } from './app.po';

describe('material-test-app App', () => {
  let page: MaterialTestAppPage;

  beforeEach(() => {
    page = new MaterialTestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
