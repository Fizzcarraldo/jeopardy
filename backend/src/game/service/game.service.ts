import { Injectable } from '@nestjs/common';
import { Game, State, Player, Question, SelectedQuestion, VerifyOption, Buzzer } from '../model/game.model';
import { PubSub } from 'graphql-subscriptions';
import { BehaviorSubject } from 'rxjs';

const quiz = require("../../../../mock-data/quiz.json");

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
      quiz
    });
    this.gameMap.set(gameId, newGame);
    newGame.subscribe( game => {
      const subscriptionId = 'game-' + gameId;
      pubsub.publish(subscriptionId, 'update');
    })
    return gameId;
  }

  private getNumberOfGames(): number {
    return this.gameMap.size;
  }

  public getGame(gameId: number): BehaviorSubject<Game> {
    return this.gameMap.get(gameId);
  }

  private getNumberOfPlayers(gameId: number): number {
    return this.gameMap.get(gameId).getValue().players.size;
  }

  public addNewPlayer(gameId: number, player: Player): number {
    const playerId = this.getNumberOfPlayers(gameId) + 1;
    const game = this.gameMap.get(gameId);
    const update = game.getValue();
    if (update.state != State.Lobby) {
      return 0;
    }
    update.players.set(playerId, player);
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

  public selectQuestion(gameId: number, categorie: string, value: number): boolean {
    const game = this.gameMap.get(gameId);
    const update = game.getValue();
    if (update.state != State.Select) {
      return false
    }
    const selectedQuestion: SelectedQuestion = {
      categorie,
      value
    }
    update.state = State.Buzzer;
    update.selectedQuestion = selectedQuestion;
    game.next(update);
    return true;
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

  private findSlectedQuestion(questions: Question[], selectedQuestion: SelectedQuestion): Question { 
    return questions.find( question => {
      return question.value === selectedQuestion.value && question.categorie === selectedQuestion.categorie;
    });
  }

  public skipAnswer(gameId: number) {
    const game: BehaviorSubject<Game> = this.getGame(gameId);
    const update: Game = game.getValue();
    if (update.state != State.Buzzer) {
      return false
    }
    const selectedQuestion: SelectedQuestion = update.selectedQuestion;
    const question = this.findSlectedQuestion(update.quiz.questions, selectedQuestion);
    question.owner = 0;
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
    const selectedQuestion: SelectedQuestion = update.selectedQuestion;
    if (update.state != State.Answer) {
      return false
    }
    if (verfication === VerifyOption.Wrong) {
      update.state = State.Buzzer;
      activePlayer.score -= selectedQuestion.value;
      update.activePlayer = null;
    }
    if (verfication === VerifyOption.Right) {
      activePlayer.score += selectedQuestion.value;
      update.selectedQuestion = null;
      const question = this.findSlectedQuestion(update.quiz.questions, selectedQuestion);
      question.owner = update.activePlayer;
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

  private gameOver(game: Game): boolean {
    if ( game.questionsAnswered >= game.quiz.questions.length ) {
      return true;
    }
    return false;
  }

}