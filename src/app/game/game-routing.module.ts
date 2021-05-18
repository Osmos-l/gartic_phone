import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './canvas/canvas.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
<<<<<<< HEAD
//  { path: ':id', component: DefaultComponent },
    { path :'canvas', component: CanvasComponent }
=======
  { path: '', component: DefaultComponent }
>>>>>>> 92109edf646e3a3c97f4892573b2c39a42148f19
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
