import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HostService } from '../host.service';
import { Game, State } from 'src/app/stage/game.model';
import { Subscription } from 'rxjs';

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

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params.gameId;
      this.hostService.initHost(this.gameId).subscribe( init => {
        if (!init.data) {
          this.router.navigate(['index'])
        }
        console.log(init)
        this.game = init.data.getGame;
        console.log(this.game)
      }); 
      this.hostService.hostSubscription(this.gameId).subscribe( update => {
        this.game = update.data.gameSubscription;
        console.log(this.game)
      });
    });
  }

  public startGame() {
    this.hostService.hostStartGame(this.gameId);
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
