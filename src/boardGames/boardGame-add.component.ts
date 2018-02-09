﻿import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { BoardGameService } from './boardGame.service';
import { BoardGame } from './boardGame';
import { SimilarBoardGame } from './similarBoardGame';
import { Common } from './../common';

@Component({
    selector: 'boardGame-add',
    templateUrl: './boardGame-add.component.html'
})
export class BoardGameAddComponent implements OnInit {
    boardGame: BoardGame;
    boardGameNotFound = false;
    similarBoardGames: SimilarBoardGame[];

    constructor(
        private boardGameService: BoardGameService,
        private location: Location
    ) {
    }

    ngOnInit() {
        this.boardGameService.getBoardGame(0)
            .subscribe((boardGame: BoardGame) => this.boardGame = boardGame);
    }

    onSubmit(submittedForm) {
        if (submittedForm.invalid) {
            return;
        }
        this.add(submittedForm.value.name);
    }

    add(name: string): void {
        var loc = this.location;
        this.boardGameService.create(name)
            .subscribe(result => {
                try {
                    this.similarBoardGames = JSON.parse(result);
                    if (this.similarBoardGames !== undefined && this.similarBoardGames.length > 0) {
                        this.boardGameNotFound = true;
                    } else {
                        new Common(loc).goBack();
                    }
                } catch (e) {
                    new Common(loc).showErrorOrGoBack(result);
                }
            });
    }

    onSelect(similarBoardGame: SimilarBoardGame): void {
        var loc = this.location;
        this.boardGameService.addSimilar(similarBoardGame.Id)
            .subscribe(result => {
                new Common(loc).showErrorOrGoBack(result);
            });
    }

    goBack(): void {
        const loc = this.location;
        return new Common(loc).goBack();
    }
}
