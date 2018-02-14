import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GamerBoardGame } from './gamerBoardGame';
import { GamerBoardGameGenerator } from '../generators/gamerBoardGameGenerator';
import {BoardGameGenerator} from '../generators/boardGameGenerator';
import { BoardGame } from '../boardGames/BoardGame';
import { Gamer } from '../gamers/gamer';
import { GamerGenerator } from '../generators/gamerGenerator';


@Injectable()
export class GamerBoardGameService {
    constructor(private gamerBoardGameGenerator: GamerBoardGameGenerator,
    private boardGameGenerator: BoardGameGenerator,
    private gamerGenerator: GamerGenerator) { }

    getGamerBoardGames(gamerNickname: string): Observable<GamerBoardGame[]> {
      return Observable.of(this.gamerBoardGameGenerator.GamerBoardGames.filter(x => x.GamerNickname === gamerNickname));
    }

    getGamerBoardGame(id: number): Observable<GamerBoardGame> {
        if (id > 0) {
          return Observable.of(this.gamerBoardGameGenerator.GamerBoardGames.find(x => x.Id === id));
        } else {
            return Observable.of(null);
        }
    }

    getGamerAvailableBoardGames(gamerNickname: string): Observable<GamerBoardGame[]> {
      // tslint:disable-next-line:max-line-length
      const gamerBoardGameIds = this.gamerBoardGameGenerator.GamerBoardGames.filter(x => x.GamerNickname === gamerNickname).map(x => x.BoardGameId);
      const gamer = this.gamerGenerator.Gamers.find(x => x.Nickname === gamerNickname);
      const boardGames = this.boardGameGenerator.BoardGames.filter(x => !gamerBoardGameIds.includes(x.Id))
      const result = boardGames.map(item => this.getGamerBoardGameObj(item, gamer))
      return Observable.of(result);
    }

    private getGamerBoardGameObj(boardGame: BoardGame, gamer: Gamer): GamerBoardGame {
      const splittedUrl = boardGame.BGGUrl.split('/');
      const bggId = Number(splittedUrl[splittedUrl.length - 1]);
      const gamerBoardGames = this.gamerBoardGameGenerator.GamerBoardGames;
      const lastId = Number(gamerBoardGames.map(x => x.Id)[gamerBoardGames.length - 1]) + 1;
      const gamerBoardGame: GamerBoardGame = {
        Id: lastId,
        GamerId: gamer.Id,
        GamerNickname: gamer.Nickname,
        BoardGameId: boardGame.Id,
        BoardGameName: boardGame.Name,
        BGGId: bggId,
        ImageUrl: boardGame.ImageUrl

      };
      return gamerBoardGame;
    }

    deactivate(id: number): Observable<string> {
      return Observable.of('');
    }

    create(boardGame: BoardGame, gamerNickname: string): Observable<string> {
      // TODO
      const gamer = this.gamerGenerator.Gamers.find(x => x.Nickname === gamerNickname);
      const gamerBoardGame = this.getGamerBoardGameObj(boardGame, gamer);
      this.gamerBoardGameGenerator.GamerBoardGames.push(gamerBoardGame);
      return Observable.of('');
    }

    update(gamerBoardGame: GamerBoardGame): Observable<string> {
      let dbGamerBoardGame = this.gamerBoardGameGenerator.GamerBoardGames.find(x => x.Id === gamerBoardGame.Id);
      if (dbGamerBoardGame !== undefined) {
        dbGamerBoardGame = gamerBoardGame;
      }
      return Observable.of('');
    }
}
