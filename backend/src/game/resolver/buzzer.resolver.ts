import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { Player, State, Game } from '../model/game.model';
import { PlayerService } from '../service/player.service';
import { StateService } from '../service/state.service';

@Resolver('Buzzer')
export class BuzzerResolver {

  constructor(
    private readonly playerService: PlayerService,
    private readonly stateService: StateService
  ) { }


  @Mutation()
  createPlayer(
    @Args('gameId') gameId: number,
    @Args('name') name: string
  ): number {
    return this.playerService.createPlayer(gameId, name);
  }

  @Query()
  getPlayer(
    @Args('gameId') gameId: number,
    @Args('playerId') playerId: number
  ): Player {
    return this.playerService.getPlayer(gameId, playerId);
  }

  /*
  @Mutation()
  pushBuzzer (
    @Args('gameId') gameId: number,
    @Args('playerId') playerId: number
  ): boolean {
    if (this.stateService.getGameState(gameId) !== State.Buzzer) {
      return false;
    };
    this.stateService.updateGameState(gameId, State.Buzzer);
    this.playerService.updateActivePlayer(gameId, playerId);
    return true;
  }
  */
}
