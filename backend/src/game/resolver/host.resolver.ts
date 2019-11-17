import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { QuizService } from '../service/quiz.service';
import { GameService } from '../service/game.service';
import { State, SelectedQuestion, VerifyOption } from '../model/game.model';

@Resolver('Host')
export class HostResolver {

  constructor(
    private readonly quizService: QuizService,
    private readonly gameService: GameService) { }

    @Mutation() 
    hostStartGame (
      @Args('gameId') gameId: number,
    ): Boolean {
      return this.gameService.startGameState(gameId);
    }


  @Mutation() 
  selectQuestion (
    @Args('gameId') gameId: number,
    @Args('categorie') categorie: string,
    @Args('value') value: number,
  ): Boolean {
    return this.gameService.selectQuestion(gameId, categorie, value);;
  }

  @Mutation() 
  verifyAnswer(
    @Args('gameId') gameId: number,
    @Args('verfication') verfication: VerifyOption
  ): Boolean {
    return this.gameService.verifyAnswer(gameId, verfication);;
  }

  @Mutation() 
  skipAnswer(
    @Args('gameId') gameId: number,
  ): Boolean {
    return this.gameService.skipAnswer(gameId);;
  }
}
