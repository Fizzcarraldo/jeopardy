import { NgModule } from '@angular/core';
import { BuzzerRoutingModule } from './buzzer-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error/error.component';
import { BuzzerMainComponent } from './buzzer-main/buzzer-main.component';



@NgModule({
  declarations: [
    SigninComponent,
    ErrorComponent,
    BuzzerMainComponent
  ],
  imports: [
    SharedModule,
    BuzzerRoutingModule
  ]
})
export class BuzzerModule { }
