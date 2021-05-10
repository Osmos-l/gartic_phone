import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawComponent } from './game/draw/draw.component';
import { GuessComponent } from './game/guess/guess.component';
import { LobbyComponent } from './game/lobby/lobby.component';
import { NewGameComponent } from './game/new-game/new-game.component';
import { StartComponent } from './game/start/start.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'new', component: NewGameComponent },
  { path: 'lobby/:id', component: LobbyComponent },
  { path: 'game/:id/start', component: StartComponent },
  { path: 'game/:id/draw', component: DrawComponent },
  { path: 'game/:id/guess', component: GuessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
