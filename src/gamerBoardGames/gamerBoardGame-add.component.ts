import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GamerBoardGameService } from './gamerBoardGame.service';
import { GamerBoardGame } from './gamerBoardGame';
import { Common } from './../common';
import { BoardGame } from '../boardGames/BoardGame';
import { BoardGameService } from '../boardGames/boardGame.service';
import { Gamer } from '../gamers/gamer';
import { GamerService } from '../gamers/gamer.service';

@Component({
    selector: 'gamerBoardGame-add',
    templateUrl: './gamerBoardGame-add.component.html'
})
export class GamerBoardGameAddComponent implements OnInit {
    gamerBoardGame: GamerBoardGame;
    gamerBoardGames: GamerBoardGame[];
    selectedBoardGame: BoardGame;
    gamerNickname: string;
    gamer: Gamer;

    constructor(
        private gamerBoardGameService: GamerBoardGameService,
        private boardGameService: BoardGameService,
        private gamerService: GamerService,
        private route: ActivatedRoute,
        private location: Location
    ) {
    }

    ngOnInit() {
      this.gamerNickname = this.route.snapshot.paramMap.get('gamerNickname');
      this.gamerBoardGameService.getGamerAvailableBoardGames(this.gamerNickname)
          .subscribe((gamerBoardGames: GamerBoardGame[]) => {
              this.gamerBoardGames = gamerBoardGames;
              if (this.gamerBoardGames) {
                this.boardGameService.getBoardGame(this.gamerBoardGames[0].BoardGameId).subscribe((boardGame: BoardGame) => {
                  this.selectedBoardGame = boardGame;
              })
            }
          })
    }

    add(): void {
        const loc = this.location;
        this.gamerBoardGameService.create(this.selectedBoardGame, this.gamerNickname)
            .subscribe(errorMessage => { new Common(loc).showErrorOrGoBack(errorMessage); });
    }

    goBack(): void {
        const loc = this.location;
        return new Common(loc).goBack();
    }

    selectBoardGame(value): void {
        this.selectedBoardGame = value;
    }
}
