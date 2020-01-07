import { Args, Query, Resolver, Mutation, Subscription } from '@nestjs/graphql';
import { Quiz, Game, Stage } from '../model/game.model';
import { QuizService } from '../service/quiz.service';
import { GameService } from '../service/game.service';

@Resolver('Stage')
export class StageResolver {

  constructor(private readonly gameService: GameService) { }

  @Mutation()
  startNewGame(
    @Args('client') client: string
  ): number {
     return this.gameService.startNewGame(client);
  }

  @Query()
  getStage(
    @Args('gameId') gameId: number
  ): Stage {
    return this.gameService.getStage(gameId);
  }
  
  @Subscription()
  gameSubscription(
    @Args('gameId') gameId: number,
  ) {
    return this.gameService.gameSubscription(gameId);

  }

  /*
  getAllGames(
  ): Game[] {
    return this.gameService.getAllGames();
  }

  @Query()
  getQuiz(
    @Args('gameId') gameId: number
  ): Quiz {
    return this.quizService.getQuiz(gameId);
  }
  */
}
