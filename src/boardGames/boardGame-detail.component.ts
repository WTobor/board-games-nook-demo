﻿import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BoardGameService } from './boardGame.service';
import { BoardGame } from './boardGame';
import { Common } from './../common';

@Component({
    selector: 'boardGame-detail',
    templateUrl: './boardGame-detail.component.html'
})
export class BoardGameDetailComponent implements OnInit {
    boardGame: BoardGame;
    urlParameter: number;

    constructor(
        private boardGameService: BoardGameService,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }

    ngOnInit() {
        this.boardGameService.getBoardGame(Number(this.route.snapshot.paramMap.get('id')))
        .subscribe((boardGame: BoardGame) => this.boardGame = boardGame);
    }

    onSubmit(submittedForm) {
        if (submittedForm.invalid) {
            return;
        }
        this.save();
    }

    save(): void {
        var loc = this.location;
        this.boardGameService.update(this.boardGame)
            .subscribe(errorMessage => { new Common(loc).showErrorOrGoBack(errorMessage); });
    }

    goBack(): void {
        const loc = this.location;
        return new Common(loc).goBack();
    }
}
