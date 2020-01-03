import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { VerifyOption } from '../shared/game.model';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(
    private apollo: Apollo
  ) { }

  public hostStartGame(gameId: number) {
    this.apollo.mutate({
      mutation: gql`
        mutation hostStartGame {
          hostStartGame(gameId: ${gameId})
      }`
    }).subscribe( result => {
      console.log(result)
    });
  }

  public hostSelectQuestion(gameId: number, category: string, value: number) {
    console.log(gameId, category, value);
    this.apollo.mutate({
      mutation: gql`
        mutation selectQuestion {
          selectQuestion(gameId: ${gameId}, category: "${category}", value: ${value} )
      }`
    }).subscribe( result => {
      console.log(result)
    });
  }

  public verifyAnswer(gameId: number, verfication: VerifyOption) {
    this.apollo.mutate({
      mutation: gql`
        mutation verifyAnswer {
          verifyAnswer(gameId: ${gameId}, verfication: "${verfication}" )
      }`
    }).subscribe( result => {
      console.log(result)
    });
  }

  public skipAnswer(gameId: number) {
    this.apollo.mutate({
      mutation: gql`
        mutation skipAnswer {
          skipAnswer(gameId: ${gameId})
      }`
    }).subscribe( result => {
      console.log(result)
    });
  }
}
