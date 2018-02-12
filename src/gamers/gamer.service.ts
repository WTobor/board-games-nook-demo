import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Gamer } from './gamer';
import { GamerGenerator } from '../generators/gamerGenerator';


@Injectable()
export class GamerService {

    constructor(private gamerGenerator: GamerGenerator) {}

    getGamers(): Observable<Gamer[]> {
        return Observable.of(this.gamerGenerator.Gamers);
    }

    getCurrentGamerNickname(): Observable<string> {
      return Observable.of(this.gamerGenerator.Gamers[0].Nickname);
    }

    getByEmail(email: string): Observable<Gamer> {
        if (email !== '') {
          return Observable.of(this.gamerGenerator.Gamers.find(x => x.Email === email));
        } else {
            return new Observable<Gamer>();
        }
    }

    getByNickname(nickname: string): Observable<Gamer> {
        if (nickname !== 'new') {
          return Observable.of(this.gamerGenerator.Gamers.find(x => x.Nickname === nickname));
        } else {
            return new Observable<Gamer>();
        }
    }

    deactivate(id: string): Observable<string> {
      return new Observable<string>();
    }

    create(gamer: Gamer): Observable<string> {
      this.gamerGenerator.Gamers.push(gamer);
      return new Observable<string>();
    }

    update(gamer: Gamer): Observable<string> {
      let dbGamer = this.gamerGenerator.Gamers.find(x => x.Id === gamer.Id);
      if (dbGamer !== undefined) {
        dbGamer = gamer;
      }
      return new Observable<string>();
    }
}
