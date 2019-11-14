import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { StageMainComponent } from './stage-main/stage-main.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'stage/:gameId', component: StageMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(
    routes,
  )],
  exports: [RouterModule]
})
export class StageRoutingModule { }
