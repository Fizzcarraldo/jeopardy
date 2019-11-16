import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/game.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  @Input() players: Player[] = [];

  constructor() { }

  ngOnInit() {
  }

}
