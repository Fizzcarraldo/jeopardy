import { Resolver, Query, Args } from '@nestjs/graphql';
import { Quiz, Question } from './quiz.interface';
import { QuizService } from './quiz.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Quiz')
export class QuizResolver {

  constructor(private readonly quizService: QuizService) {}

  @Query()
  getQuiz(): Quiz {
    return this.quizService.findQuiz();
  }

  @Query('findQuestionById')
  findQuestionById(
    id: number,
  ): Question {
    return this.quizService.findQuestionById(id);
  }
}
