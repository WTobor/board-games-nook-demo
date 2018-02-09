import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Gamer } from './gamer';
import {Gamers} from '../generators/gamers';


@Injectable()
export class GamerService {

    constructor() {}

    getGamers(): Observable<Gamer[]> {
        return new Observable<Gamer[]>(Gamers);
    }

    getCurrentGamerNickname(): Observable<string> {
      return new Observable<string>(Gamers[0].nickname);
    }

    getByEmail(email: string): Observable<Gamer> {
        if (email !== '') {
          return new Observable<Gamer>(Gamers.search(x => x.email === email));
        } else {
            return new Observable<Gamer>();
        }
    }

    getByNickname(nickname: string): Observable<Gamer> {
        if (nickname !== 'new') {
          return new Observable<Gamer>(Gamers.search(x => x.nickname === nickname));
        } else {
            return new Observable<Gamer>();
        }
    }

    deactivate(id: string): Observable<string> {
      return new Observable<string>();
    }

    create(gamer: Gamer): Observable<string> {
      Gamers.push(gamer);
      return new Observable<string>();
    }

    update(gamer: Gamer): Observable<string> {
      let dbGamer = Gamers.search(x => x.Id === gamer.Id);
      if (dbGamer !== undefined) {
        dbGamer = gamer;
      }
      return new Observable<string>();
    }
}
