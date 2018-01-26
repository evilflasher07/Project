import { OnlineshopPage } from './app.po';

describe('onlineshop App', () => {
  let page: OnlineshopPage;

  beforeEach(() => {
    page = new OnlineshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
