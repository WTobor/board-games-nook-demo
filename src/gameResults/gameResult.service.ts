import { Injectable } from '@angular/core';

import { GameResult } from './gameResult';

import { Observable } from 'rxjs/Observable';
import { GameResultGenerator } from '../generators/gameResultGenerator';

@Injectable()
export class GameResultService {
    constructor(private gameResultGenerator: GameResultGenerator) { }

    getList(nickname: string): Observable<GameResult[]> {
        if (nickname !== undefined && nickname !== '') {
          const result = this.gameResultGenerator.GameResults.filter(x => x.GamerNickname === nickname);
          return Observable.of(result);
        } else {
          return Observable.of(null);
        }
    }

    getGameResults(): Observable<GameResult[]> {
      return Observable.of(this.gameResultGenerator.GameResults);
    }

    getGameResult(id: number): Observable<GameResult> {
        if (id !== 0) {
          return Observable.of(this.gameResultGenerator.GameResults.find(x => x.Id === id));
        } else {
            return Observable.of(null);
        }
    }

    getByTable(tableId: number): Observable<GameResult[]> {
      return Observable.of(this.gameResultGenerator.GameResults.filter(x => x.GameTableId === tableId));
    }

    getByNickname(nickname: string): Observable<GameResult[]> {
      return Observable.of(this.gameResultGenerator.GameResults.filter(x => x.GamerNickname === nickname));
    }

    create(gameResult: GameResult): Observable<string> {
      this.gameResultGenerator.GameResults.push(gameResult);
      return Observable.of('');
    }

    createMany(gameResults: GameResult[]): Observable<string> {
      gameResults.forEach(element => {
        this.gameResultGenerator.GameResults.push(element);
      });
      return Observable.of('');
    }

    update(gameResult: GameResult): Observable<string> {
      let dbGameResult = this.gameResultGenerator.GameResults.find(x => x.Id === gameResult.Id);
      if (dbGameResult !== undefined) {
        dbGameResult = gameResult;
      }
      return Observable.of('');
    }

    deactivate(id: string): Observable<string> {
      return Observable.of('');
    }
}
