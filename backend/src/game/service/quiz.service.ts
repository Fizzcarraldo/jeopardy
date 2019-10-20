import { Injectable } from '@nestjs/common';
import { Quiz, Game, Question, Categorie } from '../model/game.model';
import { GameService } from './game.service';
import { BehaviorSubject } from 'rxjs';
import { PlayerService } from './player.service';

@Injectable()
export class QuizService {

  constructor(
    private readonly gameService: GameService,
    private readonly playerService: PlayerService
  ) { }

  public getQuiz(gameId): Quiz {
    const game: Game = this.gameService.getGame(gameId).getValue();
    return game.quiz;
  }

  private getQuestion(game: Game, categoryName: string, questionId: number): Question {
    const category = game.quiz.categories.find(category => {
        return category.name === categoryName;
    })
    return category.questions.find( question => {
        return question.id === questionId;
    });
  }

  public selectQuestion(gameId, categoryName, questionId): Boolean {
    const game: BehaviorSubject<Game> = this.gameService.getGame(gameId);
    const update = game.getValue();
    const question = this.getQuestion(update, categoryName, questionId);
    update.activeQuestion = question;
    game.next(update);
    return true;
  }



}
