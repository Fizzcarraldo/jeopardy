import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game, State } from '../game.model';
import { StageService } from '../stage.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stage-main',
  templateUrl: './stage-main.component.html',
  styleUrls: ['./stage-main.component.scss']
})
export class StageMainComponent implements OnInit, OnDestroy {

  public gameId: number;
  public game: Game;
  public gameState: typeof State =  State;

  private activatedRouteSubscription: Subscription;
  private initGameSubscription: Subscription;
  private gameSubscription: Subscription;

  constructor(
    private stageService: StageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params.gameId;
      this.stageService.initGame(this.gameId).subscribe( init => {
        if (!init.data.getGame) {
          this.router.navigate(['index'])
        }
        this.game = init.data.getGame;
      });
      this.stageService.gameSubscription(this.gameId).subscribe( update => {
        this.game = update.data.gameSubscription;
        console.log(this.game)
      });
    });
  }

  ngOnDestroy() {
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
    if (this.initGameSubscription) {
      this.initGameSubscription.unsubscribe();
    }
    if (this.gameSubscription) {
      this.gameSubscription.unsubscribe();
    }
  }
}
