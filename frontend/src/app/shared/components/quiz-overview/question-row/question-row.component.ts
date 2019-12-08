import { Component, OnInit, Input } from '@angular/core';
import { QuestionRow } from 'src/app/shared/game.model';

@Component({
  selector: 'app-question-row',
  templateUrl: './question-row.component.html',
  styleUrls: ['./question-row.component.scss']
})
export class QuestionRowComponent implements OnInit {
  @Input() public questionRow: QuestionRow;

  constructor() { }

  ngOnInit() {
  }

}
