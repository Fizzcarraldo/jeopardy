import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  @Input() public question: string; 

  constructor() { }

  ngOnInit() {
  }

}
