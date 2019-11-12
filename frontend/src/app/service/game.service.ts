import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Apollo, QueryRef } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Game, Player, Query } from '../types';
import gql from 'graphql-tag';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  public gameId: number; 
  public game: Subject<Game> = new  Subject<Game>();

  commentsQuery: QueryRef<any>;
  
  constructor(private apollo: Apollo) { }

  public newGame() {
    if (this.gameId) {
      return;
    }
    this.apollo.mutate({
      mutation: gql`
        mutation startNewGame {
          startNewGame(client: "flo") 
        }
      `
    }).subscribe( newGame => {
      console.log('new game')
      this.gameId = newGame.data['startNewGame'];
      this.subscribeGame();      
    });
  }

  public loadGame() {
    this.apollo.query({
      query: gql`
        query getGame {
          getGame(gameId: ${this.gameId}) {
            state
            players { name }
          }
        }
      `
    }).subscribe( foo => {
      console.log(foo)
      this.game.next(foo.data['getGame'] as Game);
    });
  }

  public subscribeGame() {
    this.apollo.subscribe({
      query: gql`
        subscription gameSubscription {
          gameSubscription(gameId: ${this.gameId}) 
        }`
    }).subscribe( foo => {
      console.log(foo)
      this.loadGame();
    });
  }
}
