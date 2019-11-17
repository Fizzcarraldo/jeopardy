import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VerifyOption } from 'src/app/shared/game.model';

@Component({
  selector: 'app-verify-answer',
  templateUrl: './verify-answer.component.html',
  styleUrls: ['./verify-answer.component.scss']
})
export class VerifyAnswerComponent implements OnInit {
  @Output() public verifyAnswer = new EventEmitter<VerifyOption>();

  public verifyOption: typeof VerifyOption =  VerifyOption;

  constructor() { }

  ngOnInit() {
  }

}
