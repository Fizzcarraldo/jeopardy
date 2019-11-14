import { Injectable } from '@nestjs/common';
import { Game, Player  } from '../model/game.model';
import { GameService } from './game.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PlayerService {

  constructor(private readonly gameService: GameService) { }

  public createPlayer(gameId: number, name: string): number {
    const newPlayer: Player = {
      name,
      score: 0
    }
    return this.gameService.addNewPlayer(gameId, newPlayer);;
  }

  public getPlayer(gameId: number, playerId: number) {
    return this.gameService.getPlayer(gameId, playerId);
  }

  /*
  public updateActivePlayer(gameId: number, playerId: number): Player {
    const game: BehaviorSubject<Game> = this.gameService.getGame(gameId);
    const update = game.getValue();
    const player: Player = this.getPlayer(update, playerId);
    update.activePlayer = player;
    game.next(update);
    return player;
  }
  */
}
