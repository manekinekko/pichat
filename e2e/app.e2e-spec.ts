import { PichatPage } from './app.po';

describe('pichat App', function() {
  let page: PichatPage;

  beforeEach(() => {
    page = new PichatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
