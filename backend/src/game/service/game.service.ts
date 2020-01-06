import { Injectable } from '@nestjs/common';
import { Game, State, Player, Question, VerifyOption, Buzzer, Stage, QuestionRow, QuestionThumbnail } from '../model/game.model';
import { PubSub } from 'graphql-subscriptions';
import { BehaviorSubject } from 'rxjs';

const quiz = require("../../../../mock-data/demo_quiz.json");

export const pubsub = new PubSub();

@Injectable()
export class GameService {

  private gameMap = new Map();

  public gameSubscription(id: number) {
    const subscriptionId = 'game-' + id;
    return pubsub.asyncIterator(subscriptionId);
  }

  public startNewGame(client: string): number {
    const gameId = this.getNumberOfGames() + 1;
    const newGame = new BehaviorSubject<Game>({
      questionsAnswered: 0,
      players: new Map(),
      activePlayer: null,
      state: State.Lobby,
      questionRows: this.newQuestionRows(5)
    });
    this.gameMap.set(gameId, newGame);
    newGame.subscribe( game => {
      const subscriptionId = 'game-' + gameId;
      pubsub.publish(subscriptionId, 'update');
    })
    return gameId;
  }

  private newQuestionRows(questions: number): QuestionRow[] {
    const questionRows: QuestionRow[] = [];
    for (let i = 0; i < quiz.categories.length; i++) {
      const questionThumbnails: QuestionThumbnail[] = [];
      for (let j = 1; j < questions +1; j++) {
        questionThumbnails.push({value: j*100});
      }
      const questionRow: QuestionRow = {
        category: quiz.categories[i],
        questionThumbnails
      };
      questionRows.push(questionRow);
    }
    return questionRows;
  }

  private getNumberOfGames(): number {
    return this.gameMap.size;
  }

  public getGame(gameId: number): BehaviorSubject<Game> {
   return this.gameMap.get(gameId);
  }

  public getStage(gameId: number): Stage {
    const game: Game = this.gameMap.get(gameId).getValue();
    const stage: Stage = {
      state: game.state,
      players: Array.from( game.players.values() ),
      activePlayer: game.activePlayer,
      activeQuestion: game.activeQuestion,
      questionRows: game.questionRows
    }
    return stage;
  }


  private getNumberOfPlayers(gameId: number): number {
    return this.gameMap.get(gameId).getValue().players.size;
  }

  public addNewPlayer(gameId: number, name: string): number {
    const playerId = this.getNumberOfPlayers(gameId) + 1;
    const game = this.gameMap.get(gameId);
    const update = game.getValue();
    const newPlayer: Player = {
      id: playerId,
      name,
      score: 0,
      color: 'player' + (update.players.size + 1)
    };

    if (update.state != State.Lobby) {
      return 0;
    }
    update.players.set(playerId, newPlayer);
    game.next(update);
    return playerId;
  }

  public startGameState(gameId: number): boolean {
    const game = this.gameMap.get(gameId);
    const update = game.getValue();
    if (update.state != State.Lobby) {
      return false
    }
    update.state = State.Select;
    game.next(update);
    return true;
  }

  public selectQuestion(gameId: number, category: string, value: number): boolean {
    const game = this.gameMap.get(gameId);
    const update: Game = game.getValue();
    if (update.state != State.Select) {
      return false
    }
    update.state = State.Buzzer;
    update.activeQuestion = this.findSlectedQuestion(quiz.questions, category, value);
    game.next(update);
    return true;
  }

  private findSlectedQuestion(questions: Question[], category: string, value: number): Question { 
    return questions.find( question => {
      return question.value === value && question.category === category;
    });
  }

  public getBuzzer(gameId: number, playerId: number): Buzzer {
    const game = this.getGame(gameId).getValue()
    const player = game.players.get(playerId);
    const buzzer = {
      gameId,
      playerId,
      player,
      state: game.state
    }
    return buzzer;
  }

  public pushBuzzer(gameId: number, playerId: number) {
    const game = this.gameMap.get(gameId);
    const update = game.getValue();
    if (update.state != State.Buzzer) {
      return false
    }
    update.activePlayer = playerId;
    update.state = State.Answer;
    game.next(update);
    return true;
  }



  public skipAnswer(gameId: number) {
    const game: BehaviorSubject<Game> = this.getGame(gameId);
    const update: Game = game.getValue();
    if (update.state != State.Buzzer) {
      return false
    }
    // const selectedQuestion: SelectedQuestion = update.selectedQuestion;
    // const question = this.findSlectedQuestion(update.quiz.questions, selectedQuestion);
    update.state = State.Select;
    update.questionsAnswered ++;
    if ( this.gameOver(update) ) {
      update.state = State.GameOver;
    }
    game.next(update);
    return true;
  }

  public verifyAnswer(gameId: number, verfication: VerifyOption): Boolean {
    const game: BehaviorSubject<Game> = this.getGame(gameId);
    const update: Game = game.getValue();
    const activePlayer: Player = update.players.get(update.activePlayer);
   // const selectedQuestion: SelectedQuestion = update.selectedQuestion;
    if (update.state != State.Answer) {
      return false
    }
    if (verfication === VerifyOption.Wrong) {
      update.state = State.Buzzer;
      activePlayer.score -= update.activeQuestion.value;
      update.activePlayer = null;
    }
    if (verfication === VerifyOption.Right) {
      activePlayer.score += update.activeQuestion.value;
      this.updateQuestionRowColor(update.questionRows, update.activeQuestion, activePlayer.color);
      update.activeQuestion.value = 2000;
      update.activeQuestion = null;
      update.activePlayer = null;
      update.state = State.Select;
      update.questionsAnswered ++;
      if ( this.gameOver(update) ) {
        update.state = State.GameOver;
      }
    }
    game.next(update);
    return true;
  }

  private updateQuestionRowColor(questionRows: QuestionRow[], question: Question, color: string): QuestionRow[] {
    const questionRow: QuestionRow = questionRows.find( questionRow => questionRow.category.id === question.category );
    const questionThumbnail: QuestionThumbnail =
      questionRow.questionThumbnails.find( questionThumbnail => questionThumbnail.value === question.value );
    questionThumbnail.color = color;
    return questionRows;
  }

  private gameOver(game: Game): boolean {
    return false;
    if ( game.questionsAnswered ) {
      return true;
    }

  }

}