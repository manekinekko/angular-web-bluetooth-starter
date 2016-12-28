import { BlePage } from './app.po';

describe('ble App', function() {
  let page: BlePage;

  beforeEach(() => {
    page = new BlePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
