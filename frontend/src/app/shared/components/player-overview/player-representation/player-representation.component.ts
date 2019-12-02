import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Player } from 'src/app/shared/game.model';

@Component({
  selector: 'app-player-representation',
  templateUrl: './player-representation.component.html',
  styleUrls: ['./player-representation.component.scss']
})
export class PlayerRepresentationComponent {
  @Input() public name: 'string';
  @Input() public color: 'string';
  @Input() public score: number;
  @Input() public totalScore: number;

  public getHeight() {
    if (this.score <= 0) {
      return 0;
    }
    return 100 / this.totalScore * this.score;
  }
}
