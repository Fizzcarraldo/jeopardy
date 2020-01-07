import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GameService } from 'src/app/shared/game.service';

@Injectable({
  providedIn: 'root'
})
export class HostMainResolveService implements Resolve<Observable<any>> {
  subscription: Subscription;
  constructor(
    private gameService: GameService,
    private router: Router
  ) {  }

  reload(): void {
    const tree: UrlTree = this.router.parseUrl(this.router.url);
    this.router.navigateByUrl(this.router.serializeUrl(tree));
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const gameId: string = route.paramMap.get('gameId');
    this.gameService.getGameSubscription(+gameId).subscribe( update => {
      this.reload();
    });
    return this.gameService.getStage(+gameId);
  }
}
