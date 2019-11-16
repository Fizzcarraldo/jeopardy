import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/app/shared/game.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input() quiz: Quiz;

  constructor() { }

  ngOnInit() {
  }

}
