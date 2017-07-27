import { EchoExamPage } from './app.po';

describe('echo-exam App', () => {
  let page: EchoExamPage;

  beforeEach(() => {
    page = new EchoExamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
