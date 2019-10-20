import { Injectable } from '@nestjs/common';
import { Game, State, Player, Question } from '../model/game.model';
import { PubSub } from 'graphql-subscriptions';
import { BehaviorSubject } from 'rxjs';

const quiz = require("../../../assets/quiz.json");

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
      activePlayer: null,
      activeQuestion: null,
      state: State.Lobby,
      quiz
    });
    this.games.push(newGame);
    newGame.subscribe( game => {
      const subscriptionId = 'game-' + game.id;
      pubsub.publish(subscriptionId, {gameSubscription: 'update'});
      console.log(game);
    })
    return newGameId;
  }

  public getGame(id: number): BehaviorSubject<Game> {
    return this.games.find( game => {
      return game.getValue().id === id;
    })
  }

  public verifyAnswer(gameId: number): Boolean {
    const game: BehaviorSubject<Game> = this.getGame(gameId);
    const update: Game = game.getValue();
    const activePlayer: Player = update.activePlayer;
    const activeQuestion: Question = update.activeQuestion;
    activeQuestion.owner = update.activePlayer;
    activePlayer.score = ++activeQuestion.value;
    update.activePlayer = null;
    update.activeQuestion = null;
    update.state = State.Select;
    game.next(update);
    return true;
  }
}