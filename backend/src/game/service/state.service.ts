import { Injectable } from '@nestjs/common';
import { State, Game } from '../model/game.model';
import { GameService } from './game.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StateService {

  constructor(private readonly gameService: GameService) { }

  public getGameState(gameId: number): State {
    const game: Game = this.gameService.getGame(gameId).getValue();
    const state: State = game.state;
    return state;
  }

  public updateGameState(gameId: number, newState: State): State {
    const game: BehaviorSubject<Game> = this.gameService.getGame(gameId);
    const update = game.getValue();
    update.state = newState;
    game.next(update);
    return newState;
  }
}
