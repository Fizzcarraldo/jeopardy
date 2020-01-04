import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stage-lobby',
  templateUrl: './stage-lobby.component.html',
  styleUrls: ['./stage-lobby.component.scss']
})
export class StageLobbyComponent implements OnInit {
  @Input() public buzzerUrl: string;
  @Input() public hostUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
