import { Args, Query, Resolver, Mutation, Subscription } from '@nestjs/graphql';
import { Game, Player, Quiz } from '../model/game.model';
import { GameService } from './game.service';


@Resolver('Game')
export class GameResolver {

  constructor(private readonly gameService: GameService) { }

  @Mutation()
  startNewGame(
    @Args('client') client: string
  ): number {
     return this.gameService.startNewGame(client);
  }

  @Query()
  getGame(
    @Args('id') id: number
  ): Game {
    return this.gameService.getGame(id).getValue();
  }

  @Mutation()
  updateGame(
    @Args('id') id: number
  ): Game {
     return this.gameService.updateGame(id).getValue();
  }

  @Subscription()
  gameSubscription(
    @Args('gameId') gameId: number,
  ) {
    return this.gameService.gameSubscription(gameId);
  }


  /*


  @Query()
  getQuiz(
    @Args('gameId') gameId: number
  ): Quiz {
    return this.gameService.getQuiz(gameId);
  }

  @Mutation()
  pushBuzzer (
    @Args('gameId') gameId: number,
    @Args('playerId') playerId: number
  ): boolean {
    return this.gameService.pushBuzzer(gameId, playerId);
  }



  @Mutation() 
  selectQuestion (
    @Args('gameId') gameId: number,
    @Args('categoryName') categoryName: string,
    @Args('questionId') questionId: number,
  ): Boolean {
    return this.gameService.selectQuestion(gameId, categoryName, questionId);
  }

  @Mutation()
  createPlayer(
    @Args('gameId') gameId: number,
    @Args('name') name: string
  ): Player {
    return this.gameService.createPlayer(gameId, name);
  }
  */
}
