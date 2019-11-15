import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { QuizService } from '../service/quiz.service';
import { GameService } from '../service/game.service';
import { State } from '../model/game.model';

@Resolver('Host')
export class HostResolver {

  constructor(
    private readonly quizService: QuizService,
    private readonly gameService: GameService) { }

    @Mutation() 
    hostStartGame (
      @Args('gameId') gameId: number,
    ): Boolean {
      return this.gameService.changeGameState(gameId, State.Select);
    }

  /*
  @Mutation() 
  selectQuestion (
    @Args('gameId') gameId: number,
    @Args('categoryName') categoryName: string,
    @Args('questionId') questionId: number,
  ): Boolean {
    return this.quizService.selectQuestion(gameId, categoryName, questionId);
  }

  @Mutation() 
  verifyAnswer(
    @Args('gameId') gameId: number,
    @Args('categoryName') categoryName: string,
    @Args('questionId') questionId: number,
  ): Boolean {
    return this.gameService.verifyAnswer(gameId);
  }
*/
}
