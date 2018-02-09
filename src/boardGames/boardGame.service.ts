import { Injectable } from "@angular/core";

import { BoardGame } from "./BoardGame";
import { Observable } from "rxjs/Observable";
import { BoardGames } from "../generators/boardGames";


@Injectable()
export class BoardGameService {
    constructor() {}

    getBoardGames(): Observable<BoardGame[]> {
      return new Observable<BoardGame[]>(BoardGames);
    }

    getBoardGame(id: number): Observable<BoardGame> {
        if (id !== 0) {
          return new Observable<BoardGame>(BoardGames.search(x => x.Id === id));
        } else {
            return new Observable<BoardGame>();
        }
    }

    deactivate(id: number): Observable<string> {
      return new Observable<string>();
    }

    create(name: string): Observable<string> {
      // TODO
      return new Observable<string>();
    }

    addSimilar(id: number): Observable<string> {
      // TODO
      return new Observable<string>();
    }

    update(boardGame: BoardGame): Observable<string> {
      let dbBoardGame = BoardGames.search(x => x.Id === boardGame.Id);
      if (dbBoardGame !== undefined) {
        dbBoardGame = boardGame;
      }
      return new Observable<string>();
    }
}
