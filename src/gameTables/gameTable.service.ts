import { Injectable } from '@angular/core';

import { GameTable } from './gameTable';
import { TableBoardGame } from './tableBoardGame';
import { Observable } from 'rxjs/Observable';
import { GameTableGenerator } from '../generators/gameTableGenerator';
import { GameResultGenerator } from '../generators/gameResultGenerator';
import { TableBoardGameGenerator } from '../generators/tableBoardGameGenerator';

@Injectable()
export class GameTableService {
    constructor(private tableBoardGameGenerator: TableBoardGameGenerator,
      private gameTableGenerator: GameTableGenerator,
      private gameResultGenerator: GameResultGenerator) { }

    getAvailableTableBoardGameList(tableId): Observable<TableBoardGame[]> {
        const result = this.tableBoardGameGenerator.TableBoardGames.filter(x => x.TableId !== tableId);
        return Observable.of(result);
    }

    getGameTablesByGamerNickname(gamerNickname: string): Observable<GameTable[]> {
      if (gamerNickname !== null && gamerNickname !== '') {
        return Observable.of(
          this.gameTableGenerator.GameTables.filter(x => x.CreatedGamerNickname === gamerNickname)
        );
      }       else {
        return Observable.of(
          this.gameTableGenerator.GameTables
        );
      }
    }

    getGameTablesWithoutResultsByGamerNickname(gamerNickname: string): Observable<GameTable[]> {
      const result = new Array<GameTable>();
      const gameTables = this.gameTableGenerator.GameTables.filter(x => x.CreatedGamerNickname === gamerNickname);
      gameTables.forEach(gameTable => {
        // tslint:disable-next-line:max-line-length
        const tableBoardGamesWithResultIds = this.gameResultGenerator.GameResults.filter(x => x.GameTableId === gameTable.Id).map(x => x.BoardGameId);

        if (gameTable.TableBoardGameList !== null)
        {
          const tableBoardGameIds = gameTable.TableBoardGameList.map(x => x.BoardGameId);
          if (JSON.stringify(tableBoardGamesWithResultIds) === JSON.stringify(tableBoardGameIds)) {
            gameTable.TableBoardGameList = gameTable.TableBoardGameList.filter(x => !tableBoardGamesWithResultIds.includes(x.BoardGameId));
            result.push(gameTable);
          }
        }
      });


      const tablesWithResults = this.gameResultGenerator.GameResults.filter(x => x.GameTableId);
      // const result = this.gameTableGenerator.GameTables.filter(x => !tablesWithResults.includes(x.GameTableId));
      return Observable.of(result);
    }

    getGameTable(id: number): Observable<GameTable> {
        if (id > 0) {
          return Observable.of(this.gameTableGenerator.GameTables.find(x => x.Id === id));
        } else {
          return Observable.of(null);
        }
    }

    deactivate(id: number): Observable<string> {
      return Observable.of('');
    }

    create(gameTable: GameTable): Observable<string> {
      this.gameTableGenerator.GameTables.push(gameTable);
      return Observable.of('');
    }

    update(gameTable: GameTable): Observable<string> {
      let dbGameTable = this.gameTableGenerator.GameTables.find(x => x.Id === gameTable.Id);
      if (dbGameTable !== undefined) {
        dbGameTable = gameTable;
      }
      return Observable.of('');
    }
}
