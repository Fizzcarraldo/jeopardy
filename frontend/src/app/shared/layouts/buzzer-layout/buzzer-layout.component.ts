import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buzzer-layout',
  templateUrl: './buzzer-layout.component.html',
  styleUrls: ['./buzzer-layout.component.scss']
})
export class BuzzerLayoutComponent implements OnInit {

  @Input() gridVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
