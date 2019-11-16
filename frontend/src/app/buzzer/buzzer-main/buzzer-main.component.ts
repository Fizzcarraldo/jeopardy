import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BuzzerService } from '../buzzer.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/shared/game.model';

@Component({
  selector: 'app-buzzer-main',
  templateUrl: './buzzer-main.component.html',
  styleUrls: ['./buzzer-main.component.scss']
})
export class BuzzerMainComponent implements OnInit, OnDestroy {

  public player: Player;
  private gameId: number;
  private playerId: number;

  private activatedRouteSubscription: Subscription;
  private getPlayerSubscription: Subscription;
  private pushBuzzerSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private buzzerService: BuzzerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params.gameId;
      this.playerId = params.playerId;
      this.getPlayerSubscription = this.buzzerService.getPlayer(this.gameId, this.playerId).subscribe( result => {
        if(!result.data['getPlayer']) {
          this.router.navigate(['buzzer/error']);
        }
        this.player = result.data['getPlayer'];
      });
    });
  }

  public pushBuzzer() {
    this.pushBuzzerSubscription = this.buzzerService.pushBuzzer(this.gameId, this.playerId).subscribe(
      result => { 
        console.log(result);
      }
    )
  }

  ngOnDestroy() {
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
    if (this.getPlayerSubscription) {
      this.getPlayerSubscription.unsubscribe();
    }
    if (this.pushBuzzerSubscription){
      this.pushBuzzerSubscription.unsubscribe();
    } 
  }

}
