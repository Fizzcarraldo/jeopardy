import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HostRoutingModule } from './host-routing.module';
import { SelectQuestionComponent } from './host-main/select-question/select-question.component';
import { HostMainComponent } from './host-main/host-main.component';



@NgModule({
  declarations: [
    SelectQuestionComponent,
    HostMainComponent
  ],
  imports: [
    SharedModule,
    HostRoutingModule
  ]
})
export class HostModule { }
