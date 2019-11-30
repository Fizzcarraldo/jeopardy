import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuzzerLayoutComponent } from './layouts/buzzer-layout/buzzer-layout.component';



@NgModule({
  declarations: [BuzzerLayoutComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    BuzzerLayoutComponent
  ]
})
export class SharedModule { }
