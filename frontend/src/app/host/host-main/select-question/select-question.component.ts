import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz, SelectedQuestion } from 'src/app/shared/game.model';

@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.scss']
})
export class SelectQuestionComponent implements OnInit {
  @Input() quiz: Quiz;
  @Output() selectQuestion = new EventEmitter<SelectedQuestion>();

  public selectedCategory: String;

  constructor() { }

  ngOnInit() {
  }

  public select(category: string, value: number) {
    const selectedQuestion: SelectedQuestion = {
      category,
      value
    }
    this.selectQuestion.emit(selectedQuestion);
  }

}
