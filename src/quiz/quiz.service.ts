import { Injectable } from '@nestjs/common';
import { Quiz, Question } from './quiz.interface';

@Injectable()
export class QuizService {
  private quiz: Quiz = {
    id: 1,
    name: 'Flos erstes Quiz',
    categories: [{
      id: 1,
      name: 'fllo',
      questions: [
        {
          id: 1,
          value: 100,
          question: 'bla',
          answer: 'blu'
        }
      ]
    }]
  }

  public findQuiz(): Quiz {
    return this.quiz;
  }

  public findQuestionById(id: number): Question {
    return {
      id: 1,
      value: 100,
      question: 'bla',
      answer: 'blu'
    };
  }

}
