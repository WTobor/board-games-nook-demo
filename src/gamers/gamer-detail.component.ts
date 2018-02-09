﻿import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GamerService } from './gamer.service';
import { Gamer } from './gamer';
import { Common } from './../common';

@Component({
    selector: 'gamer-detail',
    templateUrl: './gamer-detail.component.html'
})
export class GamerDetailComponent implements OnInit {
    gamer: Gamer;
    isCurrentGamer = false;

    constructor(
        private gamerService: GamerService,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }

    ngOnInit() {
        this.gamerService.getByNickname(this.route.snapshot.paramMap.get('nickname'))
            .subscribe((gamer: Gamer) => {
                this.gamer = gamer;
                this.gamerService.getCurrentGamerNickname().subscribe(nickname => {
                    if (nickname === this.gamer.Nickname) {
                        this.isCurrentGamer = true;
                    }
                });
            });
    }


    onSubmit(submittedForm) {
        if (submittedForm.invalid) {
            return;
        }
        this.save();
    }

    save(): void {
        var loc = this.location;
        this.gamerService.update(this.gamer)
            .subscribe(errorMessage => {
                if (this.isCurrentGamer) {
                    new Common().showErrorOrReturn(errorMessage);
                } else {
                    new Common(loc).showErrorOrGoBack(errorMessage);
                }
            });
    }

    goBack(): void {
        const loc = this.location;
        return new Common(loc).goBack();
    }
}
