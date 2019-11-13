import { NgModule } from '@angular/core';
import { StageRoutingModule } from './stage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { LobbyComponent } from './lobby/lobby.component';



@NgModule({
  declarations: [
    IndexComponent,
    LobbyComponent
  ],
  imports: [
    SharedModule,
    StageRoutingModule
  ]
})
export class StageModule { }
