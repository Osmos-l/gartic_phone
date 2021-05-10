import { NgModule } from '@angular/core';

import { LobbyComponent } from './lobby/lobby.component';
import { DrawComponent } from './draw/draw.component';
import { GuessComponent } from './guess/guess.component';
import { StartComponent } from './start/start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NewGameComponent } from './new-game/new-game.component';


@NgModule({
  declarations: [
    LobbyComponent,
    DrawComponent,
    GuessComponent,
    StartComponent,
    NewGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GameModule { }
