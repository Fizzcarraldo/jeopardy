import { NgModule } from '@angular/core';
import { StageRoutingModule } from './stage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { StageMainComponent } from './stage-main/stage-main.component';
import { LobbyComponent } from './stage-main/lobby/lobby.component';
import { PlayerListComponent } from './stage-main/player-list/player-list.component';

@NgModule({
  declarations: [
    IndexComponent,
    LobbyComponent,
    StageMainComponent,
    PlayerListComponent
  ],
  imports: [
    SharedModule,
    StageRoutingModule
  ]
})
export class StageModule { }
