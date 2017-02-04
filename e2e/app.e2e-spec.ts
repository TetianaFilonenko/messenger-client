import { MessengerAppPage } from './app.po';

describe('messenger-app App', function() {
  let page: MessengerAppPage;

  beforeEach(() => {
    page = new MessengerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
