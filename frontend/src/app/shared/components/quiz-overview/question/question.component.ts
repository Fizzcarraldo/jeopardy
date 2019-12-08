import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/shared/game.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() public question: Question;

  constructor() { }

  ngOnInit() { }

}
