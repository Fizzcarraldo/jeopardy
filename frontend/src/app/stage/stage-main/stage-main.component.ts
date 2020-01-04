import { Component, OnInit, OnDestroy } from '@angular/core';
import { StageService } from '../stage.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game, State, Stage } from 'src/app/shared/game.model';

@Component({
  selector: 'app-stage-main',
  templateUrl: './stage-main.component.html',
  styleUrls: ['./stage-main.component.scss']
})
export class StageMainComponent implements OnInit, OnDestroy {

  public buzzerUrl: string;
  public hostUrl: string;

  public gameId: number;
  public stage: Stage;
  public gameState: typeof State =  State;

  public players =  [{name: 'flo', score: 0, color: '#E59726', id: 1}];

  private activatedRouteSubscription: Subscription;
  private initGameSubscription: Subscription;
  private gameSubscription: Subscription;

  constructor(
    private stageService: StageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(resolverData => {
      console.log(resolverData);
      if (!resolverData.stage.data.getStage) {
        this.router.navigate(['index']);
      }
      this.stage = resolverData.stage.data.getStage;
    });
    this.gameId = +this.activatedRoute.snapshot.paramMap.get('gameId');
    const urlOrigin: string = window.location.origin;
    const buzzerSignin: string = '/buzzer/signin/'
    this.buzzerUrl = urlOrigin + buzzerSignin + this.gameId;
    const host: string = '/host/'
    this.hostUrl = urlOrigin + host + this.gameId;
  }
/*
  this.pushBuzzerSubscription = this.activatedRoute.params.subscribe((params: Params) => {
    const urlOrigin: string = window.location.origin;
    const buzzerSignin: string = '/buzzer/signin/'
    this.buzzerSigninUrl = urlOrigin + buzzerSignin + params.gameId;
    const host: string = '/host/'
    this.hostUrl = urlOrigin + host + params.gameId;
  });
  */

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
