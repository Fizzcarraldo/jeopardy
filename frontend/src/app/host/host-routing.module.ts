import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostMainComponent } from './host-main/host-main.component';
import { HostMainResolveService } from './host-main/host-main-resolve.service';

const routes: Routes = [
  {
    path: 'host/:gameId',
    component: HostMainComponent,
    resolve: {
      stage: HostMainResolveService
    },
    runGuardsAndResolvers: "always"
  }
];

@NgModule({
  imports: [RouterModule.forChild(
    routes,
  )],
  exports: [RouterModule]
})
export class HostRoutingModule { }
