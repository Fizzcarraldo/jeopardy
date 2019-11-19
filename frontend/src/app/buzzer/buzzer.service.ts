import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
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
      console.log(result.data['createPlayer'])
      if (!result.data['createPlayer']) {
        this.router.navigate(['buzzer/error']);
      }
      this.router.navigate([`buzzer/main/${gameId}/${result.data['createPlayer']}`]);
    }, error => {
      this.router.navigate(['buzzer/error']);
    });
  }

  public getBuzzer(gameId: number, playerId: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query getBuzzer{
          getBuzzer(gameId: ${gameId}, playerId: ${playerId}) {
            gameId playerId state player { name }
          }
        }
      `
    })
  }

  public pushBuzzer(gameId: number, playerId: number): void {
    this.apollo.mutate({
      mutation: gql`
        mutation pushBuzzer {
          pushBuzzer(gameId: ${gameId}, playerId: ${playerId})
        }
      `
    }).subscribe(
      result => { 
        console.log(result);
      }
    )

  }
}
