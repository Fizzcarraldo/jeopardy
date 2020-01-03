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

  public getStage(gameId: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query getStage {
          getStage(gameId: ${gameId})
          { state players { name } activePlayer quizOverview { categories { displayName } questionRows { questionThumbnails { color value } } } }
        }
      `
    });
  }

  public getGame(gameId: number): Observable<any> {
    console.log(gameId)
    return this.apollo.query({
      query: gql`
        query getGame {
          getGame(gameId: ${gameId})
          { state id selectedQuestion { category value} players { name } quiz { id categories { id displayName } questions { category value owner } } }
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
