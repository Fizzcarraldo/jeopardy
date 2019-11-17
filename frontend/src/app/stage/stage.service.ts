import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router, } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(
    private apollo: Apollo,
    private router: Router
  ) { }

  public newGame() {
    this.apollo.mutate({
      mutation: gql`
        mutation startNewGame {
          startNewGame(client: "flo") 
        }
      `
    }).subscribe( newGame => {
      console.log('new game')
      const gameId = newGame.data['startNewGame']; 
      this.router.navigate(['stage/' + gameId])
    });
  }

  public initGame(gameId: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query getGame {
          getGame(gameId: ${gameId}) { state id selectedQuestion { categorie value} players { name score } quiz { id categories { id displayName } questions { categorie question value owner } } } 
        }
      `
    })
  }

  public gameSubscription(gameId: number): Observable<any> {
    return this.apollo.subscribe({
      query: gql`
        subscription gameSubscription {
        gameSubscription(gameId: ${gameId}) { state id selectedQuestion { categorie value} players { name score } quiz { id categories { id displayName } questions { categorie question value owner } } } 
      }`
    })
  }
}
