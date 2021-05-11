import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawComponent } from './game/draw/draw.component';
import { GuessComponent } from './game/guess/guess.component';
import { LobbyComponent } from './game/lobby/lobby.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'lobby/:id', component: LobbyComponent },
  { path: 'game/:id/draw', component: DrawComponent },
  { path: 'game/:id/guess', component: GuessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
