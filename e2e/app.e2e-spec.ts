import { DirectiveexpPage } from './app.po';

describe('directiveexp App', function() {
  let page: DirectiveexpPage;

  beforeEach(() => {
    page = new DirectiveexpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
