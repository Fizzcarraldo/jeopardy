import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuzzerLayoutComponent } from './layouts/buzzer-layout/buzzer-layout.component';
import { BuzzerComponent } from './components/buzzer/buzzer.component';
import { BuzzerHeaderComponent } from './components/buzzer-header/buzzer-header.component';
import { StageLayoutComponent } from './layouts/stage-layout/stage-layout.component';
import { PlayerOverviewComponent } from './components/player-overview/player-overview.component';

@NgModule({
  declarations: [
    BuzzerComponent,
    BuzzerHeaderComponent,
    BuzzerLayoutComponent,
    StageLayoutComponent,
    PlayerOverviewComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    BuzzerComponent,
    BuzzerHeaderComponent,
    BuzzerLayoutComponent
  ]
})
export class SharedModule { }
