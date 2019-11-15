import { NgModule } from '@angular/core';
import { HostMianComponent } from './host-mian/host-mian.component';
import { SharedModule } from '../shared/shared.module';
import { HostRoutingModule } from './host-routing.module';



@NgModule({
  declarations: [
    HostMianComponent
  ],
  imports: [
    SharedModule,
    HostRoutingModule
  ]
})
export class HostModule { }
