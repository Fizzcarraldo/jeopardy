import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuzzerLayoutComponent } from './layouts/buzzer-layout/buzzer-layout.component';
import { BuzzerComponent } from './components/buzzer/buzzer.component';
import { BuzzerHeaderComponent } from './components/buzzer-header/buzzer-header.component';
import { StageLayoutComponent } from './layouts/stage-layout/stage-layout.component';
import { PlayerOverviewComponent } from './components/player-overview/player-overview.component';
import { PlayerRepresentationComponent } from './components/player-overview/player-representation/player-representation.component';
import { QuestionComponent } from './components/quiz-overview/question/question.component';
import { QuestionRowComponent } from './components/quiz-overview/question-row/question-row.component';
import { QuizContainerComponent } from './components/quiz-overview/quiz-container/quiz-container.component';
import { CategorieComponent } from './components/quiz-overview/categorie/categorie.component';

@NgModule({
  declarations: [
    BuzzerComponent,
    BuzzerHeaderComponent,
    BuzzerLayoutComponent,
    StageLayoutComponent,
    PlayerOverviewComponent,
    PlayerRepresentationComponent,
    QuestionComponent,
    QuestionRowComponent,
    QuizContainerComponent,
    CategorieComponent
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
