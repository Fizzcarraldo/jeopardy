import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { Player } from '../stage/game.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuzzerService {

  constructor(
    private apollo: Apollo,
    private router: Router
  ) { }

  public createPlayer(gameId: number, name: string) {
    this.apollo.mutate({
      mutation: gql`
        mutation startNewGame {
          createPlayer(gameId: ${gameId}, name: "${name}") 
        }
      `
    }).subscribe( result  => {
      this.router.navigate([`buzzer/main/${gameId}/${result.data['createPlayer']}`]);
    }, error => {
      this.router.navigate(['buzzer/error']);
    });
  }

  public getPlayer(gameId: number, playerId: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query getPlayer {
          getPlayer(gameId: ${gameId}, playerId: ${playerId}) {
            name
          }
        }
      `
    })
  }
}
