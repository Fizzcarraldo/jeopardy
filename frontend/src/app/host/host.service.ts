import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(
    private apollo: Apollo
  ) { }

  public initHost(gameId: number): Observable<any> {
    return this.apollo.query({
      query: gql`
        query getGame {
          getGame(gameId: ${gameId}) {
            state
          }
        }
      `
    })
  }

  public hostSubscription(gameId: number): Observable<any> {
    return this.apollo.subscribe({
      query: gql`
        subscription gameSubscription {
        gameSubscription(gameId: ${gameId}) {
          state
        }
      }`
    })
  }
}
