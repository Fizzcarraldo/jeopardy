import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params, UrlTree } from '@angular/router';
import { HostService } from '../host.service';

import { Subscription } from 'rxjs';
import { Game, State, SelectedQuestion, VerifyOption } from 'src/app/shared/game.model';

@Component({
  selector: 'app-host-main',
  templateUrl: './host-main.component.html',
  styleUrls: ['./host-main.component.scss']
})
export class HostMainComponent implements OnInit {

  public gameId: number;
  public game: Game;
  public gameState: typeof State =  State;

  private activatedRouteSubscription: Subscription;
  private initHostSubscription: Subscription;
  private hostSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private hostService: HostService,
    private router: Router
  ) { }


  reload(): void {
    const tree: UrlTree = this.router.parseUrl(this.router.url);
    this.router.navigateByUrl(this.router.serializeUrl(tree));
    console.log("realoded")
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(d => {
      console.log(d.game);
    });

    const gameId: string = this.activatedRoute.snapshot.paramMap.get('gameId');

    this.hostService.hostSubscription(+gameId).subscribe( update => {
      console.log("reload")
      this.reload();
    });


    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.gameId = params.gameId;
    //   this.hostService.initHost(this.gameId).subscribe( init => {
    //     if (!init.data) {
    //       this.router.navigate(['index'])
    //     }
    //     console.log(init)
    //     this.game = init.data.getGame;
    //     console.log(this.game)
    //   });

    // });
  }

  public startGame() {
    this.hostService.hostStartGame(this.gameId);
  }

  public selectQuestion(selectedQuestion: SelectedQuestion) {
    this.hostService.hostSelectQuestion(this.gameId, selectedQuestion.categorie, selectedQuestion.value)
  }

  public verifyAnswer(verifyOption: VerifyOption) {
    this.hostService.verifyAnswer(this.gameId, verifyOption);
  }

  public skipAnswer() {
    this.hostService.skipAnswer(this.gameId);
  }

  ngOnDestroy() {
    if (this.activatedRouteSubscription) {
      this.activatedRouteSubscription.unsubscribe();
    }
    if (this.initHostSubscription) {
      this.initHostSubscription.unsubscribe();
    }
    if (this.hostSubscription) {
      this.hostSubscription.unsubscribe();
    }
  }

}
