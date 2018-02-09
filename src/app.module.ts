import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GamersModule } from './gamers/gamers.module';
import { BoardGamesModule } from './boardGames/boardGames.module';
import { GamerBoardGamesModule } from './gamerBoardGames/gamerBoardGames.module';
import { GameTablesModule } from './gameTables/gameTables.module';
import { GameResultsModule } from './gameResults/gameResults.module';

import { PageNotFoundComponent } from './not-found.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { DialogService } from './dialog.service';
import { UserService } from './users/user.service';
import { AboutRoutingModule } from './about/about-routing.module';
import { WelcomeRoutingModule } from './welcome/welcome-routing.module';

// import {Gamers} from './generators/gamers';
// import {BoardGames} from './generators/boardGames';
// import {GameTables} from './generators/gameTables';
// import {GameResults} from './generators/gameResults';
// import {GamerBoardGames} from './generators/gamerBoardGames';
// import {TableBoardGames} from './generators/tableBoardGames';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        GamersModule,
        BoardGamesModule,
        GamerBoardGamesModule,
        GameTablesModule,
        GameResultsModule,
        AppRoutingModule,
        AboutRoutingModule,
        WelcomeRoutingModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        AboutComponent,
        WelcomeComponent
    ],
    providers: [
        DialogService,
        UserService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
