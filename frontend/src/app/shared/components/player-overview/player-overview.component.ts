import { Component, Input } from '@angular/core';
import { Player } from '../../game.model';

@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss']
})
export class PlayerOverviewComponent {
  @Input() public players: Player[];

  constructor() { }

  public getTotalScore() {
    let totalScore = 0;
    this.players.forEach(player => {
      if (player.score >= 0) {
        totalScore += player.score;
      }
    });
    return totalScore;
  }

}
