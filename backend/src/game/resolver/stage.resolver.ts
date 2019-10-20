import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Quiz } from '../model/game.model';
import { QuizService } from '../service/quiz.service';
import { GameService } from '../service/game.service';

@Resolver('Stage')
export class StageResolver {

  constructor(
    private readonly gameService: GameService,
    private readonly quizService: QuizService) { }

  @Mutation()
  startNewGame(
    @Args('client') client: string
  ): number {
     return this.gameService.startNewGame(client);
  }

  @Query()
  getQuiz(
    @Args('gameId') gameId: number
  ): Quiz {
    return this.quizService.getQuiz(gameId);
  }
}
