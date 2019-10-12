import { Args, Query, Resolver, Mutation, Subscription } from '@nestjs/graphql';
import { Game, Player } from '../model/game.model';
import { GameService } from './game.service';


@Resolver('Game')
export class GameResolver {

  constructor(private readonly gameService: GameService) { }

  @Query()
  getGame(
    @Args('id') id: number
  ): Game {
    return this.gameService.getGame(id);
  }

  @Mutation()
  startNewGame(
    @Args('client') client: string
  ): number {
     const game = this.gameService.startNewGame(client);
     return game.id;
  }

  @Mutation()
  createPlayer(
    @Args('gameId') gameId: number,
    @Args('name') name: string
  ): Player {
    const newPlayer = this.gameService.createPlayer(gameId, name);
    console.log(gameId, name);
    return newPlayer;
  }

  @Subscription()
  gameSubscription(
    @Args('gameId') gameId: number,
  ) {
    return this.gameService.gameSubscription(gameId);
  }
}
