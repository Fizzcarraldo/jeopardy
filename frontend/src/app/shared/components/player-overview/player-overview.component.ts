import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../game.model';

@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss']
})
export class PlayerOverviewComponent implements OnInit {
  @Input() public players: Player[];
  @Input() public score: number;

  constructor() { }

  ngOnInit() {
  }

}
