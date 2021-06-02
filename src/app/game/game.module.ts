import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanvasButtonComponent } from './canvas-button/canvas-button.component';
import { CanvasComponent } from './canvas/canvas.component';
import { DefaultComponent } from './default/default.component';
import { DrawComponent } from './draw/draw.component';
import { GameRoutingModule } from './game-routing.module';
import { GuessComponent } from './guess/guess.component';
import { LobbyPlayerComponent } from './lobby-player/lobby-player.component';
import { LobbyComponent } from './lobby/lobby.component';
import { PartyPlayerComponent } from './party-player/party-player.component';
import { PartyComponent } from './party/party.component';
import { TimerComponent } from './timer/timer.component';
import { WriteComponent } from './write/write.component';


@NgModule({
  declarations: [
    LobbyComponent,
    DrawComponent,
    GuessComponent,
    DefaultComponent,
    LobbyPlayerComponent,
    CanvasComponent,
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
