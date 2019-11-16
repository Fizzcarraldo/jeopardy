import { Component, OnInit, Input } from '@angular/core';
import { SelectedQuestion, Question } from 'src/app/shared/game.model';

@Component({
  selector: 'app-selected-question',
  templateUrl: './selected-question.component.html',
  styleUrls: ['./selected-question.component.scss']
})
export class SelectedQuestionComponent implements OnInit {
  @Input() selectedQuestion: SelectedQuestion;
  @Input() questions: Question[];

  constructor() { }

  ngOnInit() {
  }

}
