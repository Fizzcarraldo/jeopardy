import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skip-answer',
  templateUrl: './skip-answer.component.html',
  styleUrls: ['./skip-answer.component.scss']
})
export class SkipAnswerComponent implements OnInit {
  @Output() skipAnswer = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
