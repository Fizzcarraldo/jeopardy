import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HostRoutingModule } from './host-routing.module';
import { SelectQuestionComponent } from './host-main/select-question/select-question.component';
import { HostMainComponent } from './host-main/host-main.component';
import { VerifyAnswerComponent } from './host-main/verify-answer/verify-answer.component';
import { SkipAnswerComponent } from './host-main/skip-answer/skip-answer.component';


@NgModule({
  declarations: [
    SelectQuestionComponent,
    HostMainComponent,
    VerifyAnswerComponent,
    SkipAnswerComponent
  ],
  imports: [
    SharedModule,
    HostRoutingModule
  ]
})
export class HostModule { }
