import { NgModule } from '@angular/core';
import { StageRoutingModule } from './stage-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { StageMainComponent } from './stage-main/stage-main.component';
import { LobbyComponent } from './stage-main/lobby/lobby.component';
import { QuizComponent } from './stage-main/quiz/quiz.component';
import { SelectedQuestionComponent } from './stage-main/selected-question/selected-question.component';

@NgModule({
  declarations: [
    IndexComponent,
    LobbyComponent,
    StageMainComponent,
    QuizComponent,
    SelectedQuestionComponent
  ],
  imports: [
    SharedModule,
    StageRoutingModule
  ]
})
export class StageModule { }
