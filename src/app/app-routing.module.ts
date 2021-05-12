import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './game/default/default.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'lobby',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
