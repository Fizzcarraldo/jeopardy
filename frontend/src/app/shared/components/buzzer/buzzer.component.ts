import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-buzzer',
  templateUrl: './buzzer.component.html',
  styleUrls: ['./buzzer.component.scss']
})
export class BuzzerComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() price: number;
  @Output() public onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
