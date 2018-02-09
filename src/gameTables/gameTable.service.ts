import { Injectable } from '@angular/core';

import { GameTable } from './gameTable';
import { TableBoardGame } from './tableBoardGame';
import { Observable } from 'rxjs/Observable';
import { GameTables } from '../generators/gameTables';
import { GameResults } from '../generators/gameResults';
import { TableBoardGames } from '../generators/tableBoardGames';

@Injectable()
export class GameTableService {
    constructor() { }

    getAvailableTableBoardGameList(tableId): Observable<TableBoardGame[]> {
        const result = TableBoardGames.filter(x => x.GameTableId === tableId);
        return new Observable<TableBoardGame[]>(result);
    }

    getGameTablesByGamerNickname(gamerNickname: string): Observable<GameTable[]> {
      return new Observable<GameTable[]>(
        GameTables.filter(x => x.gamerNickname === gamerNickname)
      );
    }

    getGameTablesWithoutResultsByGamerNickname(gamerNickname: string): Observable<GameTable[]> {
      const tablesWitResults = GameResults.filter(x => x.GameTableId);
      const result = GameTables.filter(x => !tablesWitResults.includes(x.GameTableId));
      return new Observable<GameTable[]>(result);
    }

    getGameTable(id: number): Observable<GameTable> {
        if (id > 0) {
          return new Observable<GameTable>(GameTables.search(x => x.Id === id));
        } else {
          return new Observable<GameTable>();
        }
    }

    deactivate(id: number): Observable<string> {
      return new Observable<string>();
    }

    create(gameTable: GameTable): Observable<string> {
      GameTables.push(gameTable);
      return new Observable<string>();
    }

    update(gameTable: GameTable): Observable<string> {
      let dbGameTable = GameTables.search(x => x.Id === gameTable.Id);
      if (dbGameTable !== undefined) {
        dbGameTable = gameTable;
      }
      return new Observable<string>();
    }
}
