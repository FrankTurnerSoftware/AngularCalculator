import { AngularCalculatorPage } from './app.po';

describe('angular-calculator App', function() {
  let page: AngularCalculatorPage;

  beforeEach(() => {
    page = new AngularCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
