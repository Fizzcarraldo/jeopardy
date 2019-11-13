import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { BuzzerRoutingModule } from './buzzer-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MainComponent, SigninComponent],
  imports: [
    SharedModule,
    BuzzerRoutingModule
  ]
})
export class BuzzerModule { }
