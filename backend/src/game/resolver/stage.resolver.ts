import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { Quiz, Game } from '../model/game.model';
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
  getGame(
    @Args('gameId') gameId: number
  ): Game {
    console.log(this.gameService.getGame(gameId).getValue());
    return this.gameService.getGame(gameId).getValue();
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
