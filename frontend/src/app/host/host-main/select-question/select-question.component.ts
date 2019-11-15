import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/app/stage/game.model';

@Component({
  selector: 'app-select-question',
  templateUrl: './select-question.component.html',
  styleUrls: ['./select-question.component.scss']
})
export class SelectQuestionComponent implements OnInit {
  @Input() quiz: Quiz;

  constructor() { }

  ngOnInit() {
  }

}
