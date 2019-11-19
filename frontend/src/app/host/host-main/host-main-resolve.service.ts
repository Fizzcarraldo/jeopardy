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

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const gameId: string = route.paramMap.get('gameId');
    console.log("rerun resovler")
    return this.hostService.initHost(+gameId);
  }
}
