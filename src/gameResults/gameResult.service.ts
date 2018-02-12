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
          return new Observable<GameResult[]>();
        }
    }

    getGameResults(): Observable<GameResult[]> {
      return Observable.of(this.gameResultGenerator.GameResults);
    }

    getGameResult(id: number): Observable<GameResult> {
        if (id !== 0) {
          return Observable.of(this.gameResultGenerator.GameResults.find(x => x.Id === id));
        } else {
            return new Observable<GameResult>();
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
      return new Observable<string>();
    }

    createMany(gameResults: GameResult[]): Observable<string> {
      gameResults.forEach(element => {
        this.gameResultGenerator.GameResults.push(element);
      });
      return new Observable<string>();
    }

    update(gameResult: GameResult): Observable<string> {
      let dbGameResult = this.gameResultGenerator.GameResults.find(x => x.Id === gameResult.Id);
      if (dbGameResult !== undefined) {
        dbGameResult = gameResult;
      }
      return new Observable<string>();
    }

    deactivate(id: string): Observable<string> {
      return new Observable<string>();
    }
}
