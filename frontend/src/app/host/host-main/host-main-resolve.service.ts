import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HostService } from '../host.service';

@Injectable({
  providedIn: 'root'
})
export class HostMainResolveService implements Resolve<Observable<any>> {
  subscription: Subscription;
  constructor(
    private hostService: HostService,
    private router: Router
  ) {
  }

  reload(): void {
    const tree: UrlTree = this.router.parseUrl(this.router.url);
    this.router.navigateByUrl(this.router.serializeUrl(tree));
    console.log("realoded")
  }


  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const gameId: string = route.paramMap.get('gameId');
    this.hostService.hostSubscription(+gameId).subscribe( update => {
      console.log("reload")
      this.reload();
    });
    return this.hostService.initHost(+gameId);
  }
}
