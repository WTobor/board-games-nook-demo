import { BoardGamesNookDemoPage } from './app.po';

describe('board-games-nook-demo App', () => {
  let page: BoardGamesNookDemoPage;

  beforeEach(() => {
    page = new BoardGamesNookDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
