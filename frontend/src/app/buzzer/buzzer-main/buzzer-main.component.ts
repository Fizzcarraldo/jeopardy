import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BuzzerService } from '../buzzer.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/stage/game.model';

@Component({
  selector: 'app-buzzer-main',
  templateUrl: './buzzer-main.component.html',
  styleUrls: ['./buzzer-main.component.scss']
})
export class BuzzerMainComponent implements OnInit, OnDestroy {

  public player: Player;

  private activatedRouteSubscription: Subscription;
  private getPlayerSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private buzzerService: BuzzerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      const gameId = params.gameId;
      const playerId = params.playerId;
      this.getPlayerSubscription = this.buzzerService.getPlayer(gameId, playerId).subscribe( result  => {
        if(!result.data['getPlayer']) {
          this.router.navigate(['buzzer/error']);
        }
        this.player = result.data['getPlayer'];
      });
    });
  }

  ngOnDestroy() {
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
    if (this.getPlayerSubscription) {
      this.getPlayerSubscription.unsubscribe();
    }
  }

}
