import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BoardGameListComponent } from "./boardGame-list.component";
import { BoardGameDetailComponent } from "./boardGame-detail.component";
import { BoardGameAddComponent } from "./boardGame-add.component";

const boardGamesRoutes: Routes = [
    { path: "boardGames", component: BoardGameListComponent },
    { path: "boardGame/0", component: BoardGameAddComponent },
    { path: "boardGames/:id", component: BoardGameDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(boardGamesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BoardGameRoutingModule {
}
