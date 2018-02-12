import { TableBoardGame } from '../gameTables/tableBoardGame';

export class TableBoardGameGenerator {
  TableBoardGames: Array<TableBoardGame> = new Array<TableBoardGame>(
    {
      BoardGameId: 150,
      BGGId: 13,
      BoardGameName: 'Osadnicy z Catanu',
      ImageUrl: 'http://cf.geekdo-images.com/images/pic2419375_t.jpg',
      TableId: 300,
      GamerId: 'a1s2d3f4',
      GamerNickname: 'programmer-girl'
    },
    {
      BoardGameId: 151,
      BGGId: 39856,
      BoardGameName: 'Dixit',
      ImageUrl: 'http://cf.geekdo-images.com/images/pic3483909_t.jpg',
      TableId: 301,
      GamerId: 'q1w2e3r4',
      GamerNickname: 'tomek_K'
    },
    {
      BoardGameId: 152,
      BGGId: 169786,
      BoardGameName: 'Scythe',
      ImageUrl: 'https://cf.geekdo-images.com/images/pic3163924_t.jpg',
      TableId: 302,
      GamerId: 'a1s2d3f4',
      GamerNickname: 'programmer-girl'
    }
  )
}
