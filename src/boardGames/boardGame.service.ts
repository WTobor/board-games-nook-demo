import { Injectable } from '@angular/core';

import { BoardGame } from './BoardGame';
import { Observable } from 'rxjs/Observable';
import { BoardGameGenerator } from '../generators/boardGameGenerator';


@Injectable()
export class BoardGameService {
    constructor(private boardGameGenerator: BoardGameGenerator) {}

    getBoardGames(): Observable<BoardGame[]> {
      return Observable.of(this.boardGameGenerator.BoardGames);
    }

    getBoardGame(id: number): Observable<BoardGame> {
        if (id !== 0) {
          return Observable.of(this.boardGameGenerator.BoardGames.find(x => x.Id === id));
        } else {
            return Observable.of(null);
        }
    }

    deactivate(id: number): Observable<string> {
      return Observable.of('');
    }

    create(name: string): Observable<string> {
      // TODO
      return Observable.of('');
    }

    addSimilar(id: number): Observable<string> {
      // TODO
      return Observable.of('');
    }

    update(boardGame: BoardGame): Observable<string> {
      let dbBoardGame = this.boardGameGenerator.BoardGames.find(x => x.Id === boardGame.Id);
      if (dbBoardGame !== undefined) {
        dbBoardGame = boardGame;
      }
      return Observable.of('');
    }
}
