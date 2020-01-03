import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stage-layout',
  templateUrl: './stage-layout.component.html',
  styleUrls: ['./stage-layout.component.scss']
})
export class StageLayoutComponent implements OnInit {
  @Input() gridVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
