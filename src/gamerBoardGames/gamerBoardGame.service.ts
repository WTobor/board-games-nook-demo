import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GamerBoardGame } from './gamerBoardGame';
import { GamerBoardGameGenerator } from '../generators/gamerBoardGameGenerator';


@Injectable()
export class GamerBoardGameService {
    constructor(private gamerBoardGameGenerator: GamerBoardGameGenerator) { }

    getGamerBoardGames(gamerNickname: string): Observable<GamerBoardGame[]> {
      return Observable.of(this.gamerBoardGameGenerator.GamerBoardGames.filter(x => x.GamerNickname === gamerNickname));
    }

    getGamerBoardGame(id: number): Observable<GamerBoardGame> {
        if (id > 0) {
          return Observable.of(this.gamerBoardGameGenerator.GamerBoardGames.find(x => x.Id === id));
        } else {
            return new Observable<GamerBoardGame>();
        }
    }

    getGamerAvailableBoardGames(gamerNickname: string): Observable<GamerBoardGame[]> {
      return Observable.of(this.gamerBoardGameGenerator.GamerBoardGames.filter(x => x.GamerNickname === gamerNickname));
    }

    deactivate(id: number): Observable<string> {
      return new Observable<string>();
    }

    create(boardGameId: number): Observable<string> {
      // TODO
      return new Observable<string>();
    }

    update(gamerBoardGame: GamerBoardGame): Observable<string> {
      let dbGamerBoardGame = this.gamerBoardGameGenerator.GamerBoardGames.find(x => x.Id === gamerBoardGame.Id);
      if (dbGamerBoardGame !== undefined) {
        dbGamerBoardGame = gamerBoardGame;
      }
      return new Observable<string>();
    }
}
