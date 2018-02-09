﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './users/user.service';
import { User } from './users/user';
import { Gamer } from './gamers/gamer';
import { GamerService } from './gamers/gamer.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    user: User;
    currentGamer: Gamer;

    constructor(
        private userService: UserService,
        private gamerService: GamerService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.userService.getUser().subscribe((user: User) => {
            this.user = user;
            if (this.user != null) {
                this.gamerService.getByEmail(this.user.Email)
                    .subscribe((gamer: Gamer) => {
                        this.currentGamer = gamer;
                        if (this.currentGamer == null) {
                            this.router.navigate(['/gamer', 0]);
                        }
                    });
            }
        });
    };

    logOut(): void {
        this.userService.logOutUser();
    }
}
