import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';


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
      this.router.navigate(['stage/lobby/' + gameId])
    });
  }
}
