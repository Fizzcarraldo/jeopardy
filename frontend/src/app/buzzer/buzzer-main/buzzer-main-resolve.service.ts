import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BuzzerService } from '../buzzer.service';
import { GameService } from 'src/app/shared/game.service';

@Injectable({
  providedIn: 'root'
})
export class BuzzerMainResolveService {
  subscription: Subscription;
  constructor(
    private gameService: GameService,
    private buzzerService: BuzzerService,
    private router: Router
  ) { }

  reload(): void {
    const tree: UrlTree = this.router.parseUrl(this.router.url);
    this.router.navigateByUrl(this.router.serializeUrl(tree));
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const gameId: string = route.paramMap.get('gameId');
    const playerId: string = route.paramMap.get('playerId');    
    this.gameService.getGameSubscription(+gameId).subscribe( update => {
      this.reload();
    });
    return this.buzzerService.getBuzzer(+gameId, +playerId);
  }
}
