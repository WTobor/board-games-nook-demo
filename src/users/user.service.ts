import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {
    constructor() {}

    getUser(): Observable<User> {
        return  Observable.of<User>(
          {
          Id: 123,
          Name: 'programmer-girl',
          ImageUrl: '',
          Email: 'test@test.pl'
        });
    }

    logOutUser(): void {
    }
}
