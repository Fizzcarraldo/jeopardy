import { Injectable } from '@nestjs/common';
import { Game, State, Player, Question } from '../model/game.model';
import { PubSub } from 'graphql-subscriptions';
import { BehaviorSubject } from 'rxjs';

const quiz = require("../../../assets/quiz.json");

export const pubsub = new PubSub();

@Injectable()
export class GameService {

  private gameMap = new Map();
  private games: BehaviorSubject<Game>[] = [];

  public gameSubscription(id: number) {
    const subscriptionId = 'game-' + id;
    return pubsub.asyncIterator(subscriptionId);
  }

  public startNewGame(client: string): number {
    const gameId = this.getNumberOfGames() + 1;
    const newGame = new BehaviorSubject<Game>({
      players: new Map(),
      activePlayer: null,
      activeQuestion: null,
      state: State.Lobby,
      quiz
    });
    this.gameMap.set(gameId, newGame);
    newGame.subscribe( game => {
      const subscriptionId = 'game-' + gameId;
      pubsub.publish(subscriptionId, {gameSubscription: game});
      console.log(game);
    })
    return gameId;
  }

  private getNumberOfGames(): number {
    return this.gameMap.size;
  }

  public getGame(gameId: number): BehaviorSubject<Game> {
    return this.gameMap.get(gameId);
  }

  private getNumberOfPlayers(gameId: number): number {
    return this.gameMap.get(gameId).getValue().players.size;
  }

  public addNewPlayer(gameId: number, player: Player): number {
    const playerId = this.getNumberOfPlayers(gameId) + 1;
    const game = this.gameMap.get(gameId);
    const update = game.getValue();
    update.players.set(playerId, player);
    game.next(update);
    return playerId;
  }

  /*
  get Question

  for (let value of foo.keys()) {
    console.log(value);  

  }


  public getAllGames(): Game[] {
    const games: Game = {id: 1}
    return [
    //  games
    ]
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
  */
}