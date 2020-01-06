import { Component, OnInit, Input } from '@angular/core';
import { QuestionRow } from 'src/app/shared/game.model';

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.scss']
})
export class QuizContainerComponent implements OnInit {
  @Input() public questionRows: QuestionRow[];

  constructor() { }

  ngOnInit() {
  }

}
