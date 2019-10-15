import { Injectable } from '@nestjs/common';
import { Game, State, Player, Quiz } from '../model/game.model';
import { PubSub } from 'graphql-subscriptions';
import { Subject } from 'rxjs';

const quiz = require("../../assets/quiz.json");

export const pubsub = new PubSub();

@Injectable()
export class GameService {
  private games: Subject<Game>[] = [];



  public gameSubscription(id: number) {
    const subscriptionId = 'game-' + id;
    return pubsub.asyncIterator(subscriptionId);
  }

  public startNewGame(client: string): number {
    const newGame: Game = {
      id: this.games.length + 1,
      players: [],
      state: State.Lobby,
      quiz
    };
    this.games.push(newGame);
    this.updateClient(newGame.id, 'new Game');
    return newGame.id;
  }

  public getGame(id: number): Game {
    return this.games.find( game => {
      return game.id === id;
    })
  }






  public selectQuestion(gameId, categoryName, questionId) {
    const question = this.getQuestion(gameId, categoryName, questionId);
    question.status = "active";
    return true;
  }
}