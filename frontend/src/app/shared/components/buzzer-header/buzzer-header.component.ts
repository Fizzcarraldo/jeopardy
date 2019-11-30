import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buzzer-header',
  templateUrl: './buzzer-header.component.html',
  styleUrls: ['./buzzer-header.component.scss']
})
export class BuzzerHeaderComponent implements OnInit {
  @Input() public name: string;
  @Input() public score: number;
  @Input() public playerColor: string;
  

  constructor() { }

  ngOnInit() {
  }

}
