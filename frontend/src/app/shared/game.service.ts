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

  private gameSubscription: Observable<any>; 
  
  private subscribeGame(gameId: number) {
    this.gameSubscription =  this.apollo.subscribe({
      query: gql`
        subscription gameSubscription {
        gameSubscription(gameId: ${gameId})
      }`
    });
  }

  public getGameSubscription(gameId: number): Observable<any> {
    if (!this.gameSubscription) {
      this.subscribeGame(gameId);
    }
    return this.gameSubscription;
  }

  public getStage(gameId: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query getStage {
          getStage(gameId: ${gameId})
            { state players { color name id score } activePlayer activeQuestion { category value question answer} questionRows { category { displayName id } questionThumbnails { color value answerd } } }
        }
      `
    });
  }

  public getGame(gameId: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query getGame {
          getGame(gameId: ${gameId})
          { state id selectedQuestion { category value} players { name } quiz { id categories { id displayName } questions { category value owner } } }
        }
      `
    });
  }
}
