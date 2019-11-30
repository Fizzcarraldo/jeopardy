import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuzzerLayoutComponent } from './layouts/buzzer-layout/buzzer-layout.component';
import { BuzzerComponent } from './components/buzzer/buzzer.component';
import { BuzzerHeaderComponent } from './components/buzzer-header/buzzer-header.component';

@NgModule({
  declarations: [
    BuzzerComponent,
    BuzzerHeaderComponent,
    BuzzerLayoutComponent
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
