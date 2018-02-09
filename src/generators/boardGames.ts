import { BoardGame } from '../boardGames/BoardGame';

export const BoardGames: any = new Array<BoardGame>(
  {
    Id: 150,
    Name: 'Osadnicy z Catanu',
    Description: 'Opis gry Osadnicy z Catanu',
    MinPlayers: 3,
    MaxPlayers: 4,
    MinAge: 10,
    MinTime: 60,
    MaxTime: 120,
    IsExpansion: false,
    ParentId: null,
    ParentBoardGame: null,
    BGGUrl: 'https://boardgamegeek.com/boardgame/148228',
    ImageUrl: 'http://cf.geekdo-images.com/images/pic2419375_t.jpg'
  },
{
  Id: 151,
  Name: 'Dixit',
  Description: 'Opis gry Dixit',
  MinPlayers: 3,
  MaxPlayers: 6,
  MinAge: 6,
  MinTime: 30,
  MaxTime: 30,
  BGGUrl: 'https://boardgamegeek.com/boardgame/39856',
  IsExpansion: false,
  ParentId: null,
  ParentBoardGame: null,
  ImageUrl: 'http://cf.geekdo-images.com/images/pic3483909_t.jpg'
},
{
  Id: 152,
  Name: 'Scythe',
  Description: 'Opis gry Scythe',
  MinPlayers: 1,
  MaxPlayers: 5,
  MinAge: 12,
  MinTime: 90,
  MaxTime: 115,
  BGGUrl: 'https://boardgamegeek.com/boardgame/169786',
  IsExpansion: false,
  ParentId: null,
  ParentBoardGame: null,
  ImageUrl: 'https://cf.geekdo-images.com/images/pic3163924_t.jpg'
},
{
  Id: 153,
  Name: 'Sabotażysta',
  Description: 'Opis gry Sabotażysta',
  MinPlayers: 3,
  MaxPlayers: 10,
  MinAge: 8,
  MinTime: 30,
  MaxTime: 30,
  BGGUrl: 'https://boardgamegeek.com/boardgame/9220',
  IsExpansion: false,
  ParentId: null,
  ParentBoardGame: null,
  ImageUrl: 'https://cf.geekdo-images.com/images/pic2602139_t.jpg'
},
{
  Id: 154,
  Name: 'Splendor',
  Description: 'Opis gry Splendor',
  MinPlayers: 2,
  MaxPlayers: 4,
  MinAge: 10,
  MinTime: 30,
  MaxTime: 30,
  BGGUrl: 'https://boardgamegeek.com/boardgame/148228',
  IsExpansion: false,
  ParentId: null,
  ParentBoardGame: null,
  ImageUrl: 'https://cf.geekdo-images.com/images/pic1904079_t.jpg'
}
);
