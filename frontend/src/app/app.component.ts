import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Game, Player, Query } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  games: Observable<Game[]>;
  id;
  constructor(private apollo: Apollo) { }
  ngOnInit() {
    this.games = this.apollo.watchQuery<Query>({
      query: gql`
        query getAllGames {
          getAllGames(id: 1) {
            id
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => {
          console.log(result);
          return result.data.getAllGames
        })
      );
  }

  newGame() {
    this.apollo.mutate({
      mutation: gql`
        mutation startNewGame {
          startNewGame(client: "flo") 
        }
      `
    }).subscribe( foo => {
      console.log( foo );
    });
  
  }

}

