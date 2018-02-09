import { GameTable } from '../gameTables/gameTable';
import { TableBoardGame } from '../gameTables/tableBoardGame';
import { TableBoardGames } from './tableBoardGames';

export const GameTables: any = new Array<GameTable>(
  {
    Id: 300,
    Name: 'Stół do Osadników z Catanu + żeglarze',
    CreatedGamerId: 'a1s2d3f4',
    CreatedGamerNickname: 'programmer-girl',
    CreatedDate: null,
    IsPrivate: false,
    City: 'Wrocław',
    Street: 'Legnicka',
    TableBoardGameList: new Array<TableBoardGame>(
      TableBoardGames[0]
    ),
    MinPlayers: 2,
    MaxPlayers: 4
  },
  {
    Id: 301,
    Name: 'Wieczorne spotkanie na Dixit i Terra Mysticę',
    CreatedDate: null,
    CreatedGamerId: 'q1w2e3r4',
    CreatedGamerNickname: 'tomek_K',
    IsPrivate: false,
    City: 'Warszawa',
    Street: 'Wyszyńskiego',
    TableBoardGameList: new Array<TableBoardGame>(
      TableBoardGames[1],
      TableBoardGames[2]
    ),
    MinPlayers: 2,
    MaxPlayers: 4
  },
  {
    Id: 302,
    Name: 'Prywatny stół dla wtajemniczonych',
    CreatedDate: null,
    CreatedGamerId: 'a1s2d3f4',
    CreatedGamerNickname: 'programmer-girl',
    IsPrivate: true,
    City: 'Poznań',
    Street: 'Rynek',
    TableBoardGameList: null,
    MinPlayers: 2,
    MaxPlayers: 2
  },
  {
    Id: 304,
    Name: 'Planszówki u Maćka',
    CreatedDate: null,
    CreatedGamerId: 'n7m8k9l0',
    CreatedGamerNickname: 'macius',
    IsPrivate: false,
    City: 'Wrocław',
    Street: 'Gliniana',
    TableBoardGameList: null,
    MinPlayers: 2,
    MaxPlayers: 6
  },
  {
    Id: 305,
    Name: 'Rozgrywki w Dixit',
    CreatedDate: null,
    CreatedGamerId: 'z2x3c4v5',
    CreatedGamerNickname: 'anna90',
    IsPrivate: false,
    City: 'Gdańsk',
    Street: 'Centralna',
    TableBoardGameList: null,
    MinPlayers: 4,
    MaxPlayers: 6
  }
)
