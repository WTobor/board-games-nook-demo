import { Injectable } from '@angular/core';

import { GameResult } from './gameResult';

import { Observable } from 'rxjs/Observable';
import { GameResults } from '../generators/gameResults';

@Injectable()
export class GameResultService {
    constructor() { }

    getList(nickname: string): Observable<GameResult[]> {
        if (nickname !== undefined && nickname !== '') {
          const result = GameResults.filter(x => x.GamerNickname === nickname);
          return new Observable<GameResult[]>(result);
        } else {
          return new Observable<GameResult[]>();
        }
    }

    getGameResults(): Observable<GameResult[]> {
      return new Observable<GameResult[]>(GameResults);
    }

    getGameResult(id: number): Observable<GameResult> {
        if (id !== 0) {
          return new Observable<GameResult>(GameResults.search(x => x.Id === id));
        } else {
            return new Observable<GameResult>();
        }
    }

    getByTable(tableId: number): Observable<GameResult[]> {
      return new Observable<GameResult[]>(GameResults.filter(x => x.TableId === tableId));
    }

    getByNickname(nickname: string): Observable<GameResult[]> {
      return new Observable<GameResult[]>(GameResults.filter(x => x.GamerNickname === nickname));
    }

    create(gameResult: GameResult): Observable<string> {
      GameResults.push(gameResult);
      return new Observable<string>();
    }

    createMany(gameResults: GameResult[]): Observable<string> {
      gameResults.forEach(element => {
        GameResults.push(element);
      });
      return new Observable<string>();
    }

    update(gameResult: GameResult): Observable<string> {
      let dbGameResult = GameResults.search(x => x.Id === gameResult.Id);
      if (dbGameResult !== undefined) {
        dbGameResult = gameResult;
      }
      return new Observable<string>();
    }

    deactivate(id: string): Observable<string> {
      return new Observable<string>();
    }
}
