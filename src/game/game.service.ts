import { Injectable } from '@nestjs/common';
import { Game, State, Player, Quiz } from '../model/game.model';
import { PubSub } from 'graphql-subscriptions';
import { Subject, BehaviorSubject } from 'rxjs';

const quiz = require("../../assets/quiz.json");

export const pubsub = new PubSub();

@Injectable()
export class GameService {
  private games: BehaviorSubject<Game>[] = [];

  public gameSubscription(id: number) {
    const subscriptionId = 'game-' + id;
    return pubsub.asyncIterator(subscriptionId);
  }

  public startNewGame(client: string): number {
    const newGameId = this.games.length + 1;
    const newGame = new BehaviorSubject<Game>({
      id: newGameId,
      players: [],
      state: State.Lobby,
      quiz
    });
    this.games.push(newGame);
    newGame.subscribe( game => {
      this.updateSubscription(game.id, 'update');
      console.log(game);
    })
    return newGameId;
  }

  private updateSubscription(id: number, event: string): void {
    const subscriptionId = 'game-' + id;
    pubsub.publish(subscriptionId, {gameSubscription: event});
  }

  public getGame(id: number): BehaviorSubject<Game> {
    return this.games.find( game => {
      return game.getValue().id === id;
    })
  }

  public updateGame(id: number): BehaviorSubject<Game> {
    const game = this.getGame(id);
    const update = game.getValue();
    update.state = State.Buzzer;
    game.next(update);
    return game;
  }
  /*


  public selectQuestion(gameId, categoryName, questionId) {
    const question = this.getQuestion(gameId, categoryName, questionId);
    question.status = "active";
    return true;
  }
  */
}