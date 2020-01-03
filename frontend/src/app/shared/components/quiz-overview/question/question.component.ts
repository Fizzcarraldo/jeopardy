import { Component, OnInit, Input } from '@angular/core';
import { QuestionThumbnail } from 'src/app/shared/game.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() public questionThumbnail: QuestionThumbnail;

  constructor() { }

  ngOnInit() { }

}
