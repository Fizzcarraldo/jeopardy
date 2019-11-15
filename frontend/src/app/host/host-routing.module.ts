import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostMainComponent } from './host-main/host-main.component';

const routes: Routes = [
  { path: 'host/:gameId', component: HostMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(
    routes,
  )],
  exports: [RouterModule]
})
export class HostRoutingModule { }
