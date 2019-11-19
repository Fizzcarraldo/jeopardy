import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private apollo: Apollo
  ) { }

  public getGame(gameId: number): Observable<any> {
    console.log(gameId)
    return this.apollo.query({
      query: gql`
        query getGame {
          getGame(gameId: ${gameId})
          { state id selectedQuestion { categorie value} players { name } quiz { id categories { id displayName } questions { categorie value owner } } }
        }
      `
    });
  }

  public subscribeGame(gameId: number): Observable<any> {
    return this.apollo.subscribe({
      query: gql`
        subscription gameSubscription {
        gameSubscription(gameId: ${gameId})
      }`
    });
  }
}
