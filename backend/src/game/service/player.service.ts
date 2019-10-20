import { Injectable } from '@nestjs/common';
import { Game, Player  } from '../model/game.model';
import { GameService } from './game.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlayerService {

  constructor(private readonly gameService: GameService) { }

  public createPlayer(gameId: number, name: string): Player {
    const game: BehaviorSubject<Game> = this.gameService.getGame(gameId);
    const update = game.getValue();
    const newPlayer: Player = {
      name,
      id: update.players.length + 1,
      score: 0
    }
    update.players.push(newPlayer);
    game.next(update);
    return newPlayer;
  }

  private getPlayer(game: Game, playerId: number): Player {
    return game.players.find( player => {
      return player.id === playerId;
    })
  }

  public updateActivePlayer(gameId: number, playerId: number): Player {
    const game: BehaviorSubject<Game> = this.gameService.getGame(gameId);
    const update = game.getValue();
    const player: Player = this.getPlayer(update, playerId);
    update.activePlayer = player;
    game.next(update);
    return player;
  }
}
