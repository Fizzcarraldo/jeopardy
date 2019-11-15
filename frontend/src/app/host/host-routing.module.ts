import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostMianComponent } from './host-mian/host-mian.component';

const routes: Routes = [
  { path: 'host/:gameId', component: HostMianComponent }
];

@NgModule({
  imports: [RouterModule.forChild(
    routes,
  )],
  exports: [RouterModule]
})
export class HostRoutingModule { }
