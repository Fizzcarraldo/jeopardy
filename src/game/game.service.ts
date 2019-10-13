import { Injectable } from '@nestjs/common';
import { Game, State, Player, Quiz } from '../model/game.model';
import { PubSub } from 'graphql-subscriptions';

const quiz = require("../../assets/quiz.json");

export const pubsub = new PubSub();

@Injectable()
export class GameService {
  private games: Game[] = [];

  public pushBuzzer(gameId: number, playerId: number): boolean {
    const game = this.getGame(gameId);
    return game.state === "Buzzer";
  }

  private updateClient(id: number, event: string): void {
    const subscriptionId = 'game-' + id;
    pubsub.publish(subscriptionId, {gameSubscription: event});
  }

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

  public getQuiz(gameId: number): Quiz {
    return this.getGame(gameId).quiz;
  }

  public createPlayer(gameId, name): Player {
    const game = this.games.find( game => {
      return game.id === gameId;
    })
    const newPlayer: Player = {
      name,
      id: game.players.length + 1,
      score: 0
    }
    game.players.push(newPlayer);
    this.updateClient(game.id, 'new Player');
    return newPlayer;
  }

  private getQuestion(gameId, categoryName, questionId) {
    const game = this.getGame(gameId);
    const category = game.quiz.categories.find(category => {
      return category.name === categoryName;
    })
    return category.questions.find( question => {
      return question.id === questionId;
    });
  }

  public selectQuestion(gameId, categoryName, questionId) {
    const question = this.getQuestion(gameId, categoryName, questionId);
    question.status = "active";
    return true;
  }
}