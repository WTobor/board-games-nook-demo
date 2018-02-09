import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BoardGameListComponent } from './boardGame-list.component';
import { BoardGameDetailComponent } from './boardGame-detail.component';
import { BoardGameAddComponent } from './boardGame-add.component';

import { BoardGameService } from './boardGame.service';

import { BoardGameRoutingModule } from './boardGames-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BoardGameRoutingModule
    ],
    declarations: [
        BoardGameListComponent,
        BoardGameDetailComponent,
        BoardGameAddComponent
    ],
    providers: [BoardGameService]
})
export class BoardGamesModule {
}
