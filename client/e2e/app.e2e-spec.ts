import { AngularLibraryPage } from './app.po';

describe('angular-library App', function() {
  let page: AngularLibraryPage;

  beforeEach(() => {
    page = new AngularLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
