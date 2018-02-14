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
            return Observable.of(null);
        }
    }

    getByNickname(nickname: string): Observable<Gamer> {
        if (nickname !== 'new') {
          return Observable.of(this.gamerGenerator.Gamers.find(x => x.Nickname === nickname));
        } else {
            return Observable.of(null);
        }
    }

    deactivate(id: string): Observable<string> {
      return Observable.of('');
    }

    create(gamer: Gamer): Observable<string> {
      this.gamerGenerator.Gamers.push(gamer);
      return Observable.of('');
    }

    update(gamer: Gamer): Observable<string> {
      let dbGamer = this.gamerGenerator.Gamers.find(x => x.Id === gamer.Id);
      if (dbGamer !== undefined) {
        dbGamer = gamer;
      }
      return Observable.of('');
    }
}
