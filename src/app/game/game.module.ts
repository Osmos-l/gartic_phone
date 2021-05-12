import { NgModule } from '@angular/core';

import { LobbyComponent } from './lobby/lobby.component';
import { DrawComponent } from './draw/draw.component';
import { GuessComponent } from './guess/guess.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { DefaultComponent } from './default/default.component';
import { LobbyPlayerComponent } from './lobby-player/lobby-player.component';

@NgModule({
  declarations: [
    LobbyComponent,
    DrawComponent,
    GuessComponent,
    DefaultComponent,
    LobbyPlayerComponent
  ],
  imports: [
    GameRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: []
})
export class GameModule { }
