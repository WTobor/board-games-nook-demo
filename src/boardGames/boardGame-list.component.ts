﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

import { BoardGameService } from './boardGame.service';
import { BoardGame } from './boardGame';


@Component({
    selector: 'boardGame-list',
    templateUrl: './boardGame-list.component.html',
})
export class BoardGameListComponent implements OnInit {
    private allBoardGames: BoardGame[];
    private searchedBoardGames: BoardGame[];
    private isAdmin = false;
    private query = '';
    private search: Subject<string> = new Subject<string>();

    constructor(
        private boardGameService: BoardGameService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.boardGameService.getBoardGames()
            .subscribe((boardGameList: BoardGame[]) => {
                this.allBoardGames = boardGameList;
                this.searchedBoardGames = boardGameList;
            });

        this.search.debounceTime(500).map(query => {
            return query;
        }).subscribe(this.searchQuery.bind(this));
    }

    delete(boardGame: BoardGame): void {
        this.boardGameService
            .deactivate(boardGame.Id)
            .subscribe(() => {
                this.allBoardGames = this.allBoardGames.filter(g => g !== boardGame);
                //if (this.selectedBoardGame === boardGame) {
                //    this.selectedBoardGame = null;
                //}
            });
    }

    searchQuery(query: string): void {
        if (query.length > 0) {
            this.searchedBoardGames = this.allBoardGames.filter(x => x.Name.toLowerCase().match(query.toLowerCase()));
        } else {
            this.searchedBoardGames = this.allBoardGames;
        }
    }

    gotoDetail(boardGame: BoardGame): void {
        this.router.navigate(['/boardGames', boardGame.Id]);
    }

    gotoAdd(): void {
        this.router.navigate(['/boardGame', 0]);
    }
}