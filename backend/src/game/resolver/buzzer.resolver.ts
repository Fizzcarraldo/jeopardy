import { Args, Resolver, Mutation, Query } from '@nestjs/graphql';
import { Player, State, Game, Buzzer } from '../model/game.model';
import { PlayerService } from '../service/player.service';
import { GameService } from '../service/game.service';

@Resolver('Buzzer')
export class BuzzerResolver {

  constructor(
    private readonly playerService: PlayerService,
    private readonly gameService: GameService
  ) { }


  @Mutation()
  createPlayer(
    @Args('gameId') gameId: number,
    @Args('name') name: string
  ): number {
    return this.gameService.addNewPlayer(gameId, name);
  }

  @Query()
  getBuzzer(
    @Args('gameId') gameId: number,
    @Args('playerId') playerId: number
  ): Buzzer {
    return this.gameService.getBuzzer(gameId, playerId);
  }

  @Mutation()
  pushBuzzer (
    @Args('gameId') gameId: number,
    @Args('playerId') playerId: number
  ): boolean {
    return this.gameService.pushBuzzer(gameId, playerId);
  }

}
