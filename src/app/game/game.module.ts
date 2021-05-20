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
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasDrawAreaComponent } from './canvas-draw-area/canvas-draw-area.component';
import { CanvasButtonComponent } from './canvas-button/canvas-button.component';
import { PartyComponent } from './party/party.component';
import { PartyPlayerComponent } from './party-player/party-player.component';
import { WriteComponent } from './write/write.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    LobbyComponent,
    DrawComponent,
    GuessComponent,
    DefaultComponent,
    LobbyPlayerComponent,
    CanvasComponent,
    CanvasDrawAreaComponent,
    CanvasButtonComponent,
    PartyComponent,
    PartyPlayerComponent,
    WriteComponent,
    TimerComponent
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
