import { Injectable } from '@nestjs/common';
import { Game, State, Player } from '../model/game.model';
import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

@Injectable()
export class GameService {
  private games: Game[] = [];

  private updateClient(id: number, event: string): void {
    const subscriptionId = 'game-' + id;
    pubsub.publish(subscriptionId, {gameSubscription: event});
  }

  public gameSubscription(id: number) {
    const subscriptionId = 'game-' + id;
    return pubsub.asyncIterator(subscriptionId);
  }

  public startNewGame(client: string): Game {
    const newGame: Game = {
      id: this.games.length + 1,
      players: [],
      state: State.Lobby
    };
    this.games.push(newGame);
    this.updateClient(newGame.id, 'new Game');
    return newGame
  }

  public getGame(id: number): Game {
    return this.games.find( game => {
      return game.id === id;
    })
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
}