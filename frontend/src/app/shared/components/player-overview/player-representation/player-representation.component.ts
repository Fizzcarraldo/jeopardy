import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Player } from 'src/app/shared/game.model';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-player-representation',
  templateUrl: './player-representation.component.html',
  styleUrls: ['./player-representation.component.scss']
})
export class PlayerRepresentationComponent {
  @Input() public id: number;
  @Input() public name: 'string';
  @Input() public color: 'string';
  @Input() public score: number;
  @Input() public totalScore: number;
  @Input() public activePlayer: number;

  public getHeight(): number {
    if (this.score <= 0) {
      return 0;
    }
    return 100 / this.totalScore * this.score;
  }

  public getBackgroundColor(): string {
    if (!this.activePlayer || this.activePlayer === this.id) {
      return 'background-color-' + this.color;
    }
    return 'background-color-player-inactive';
  }
}
