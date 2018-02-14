import { Injectable } from '@angular/core';

import { Participation } from './participation';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ParticipationService {

    constructor() { }

    getParticipationsByGamerNickname(gamerNickname: string): Observable<Participation[]> {
      // TODO
      return new Observable<Participation[]>();
    }

    getParticipation(id: number): Observable<Participation> {
        if (id > 0) {
            // TODO
            return new Observable<Participation>();
        }         else {
            return new Observable<Participation>();
        }
    }

    create(participation: Participation): Observable<string> {
        // TODO
        return Observable.of('');
    }

    update(participation: Participation): Observable<string> {
        // TODO
        return Observable.of('');
    }

    deactivate(id: number): Observable<string> {
      return Observable.of('');
    }
}
