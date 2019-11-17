import { Injectable } from '@nestjs/common';
import { Game, State, Player, Question, SelectedQuestion, VerifyOption } from '../model/game.model';
import { PubSub } from 'graphql-subscriptions';
import { BehaviorSubject } from 'rxjs';

const quiz = require("../../../assets/quiz.json");

export const pubsub = new PubSub();

@Injectable()
export class GameService {

  private gameMap = new Map();
  private games: BehaviorSubject<Game>[] = [];

  public gameSubscription(id: number) {
    const subscriptionId = 'game-' + id;
    return pubsub.asyncIterator(subscriptionId);
  }

  public startNewGame(client: string): number {
    const gameId = this.getNumberOfGames() + 1;
    const newGame = new BehaviorSubject<Game>({
      players: new Map(),
      activePlayer: null,
      state: State.Lobby,
      quiz
    });
    this.gameMap.set(gameId, newGame);
    newGame.subscribe( game => {
      const subscriptionId = 'game-' + gameId;
      pubsub.publish(subscriptionId, {gameSubscription: game});
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

  public getPlayer(gameId: number, playerId: number): Player {
    const game = this.getGame(gameId).getValue()
    const player = game.players.get(playerId);
    return player;
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
      update.state = State.Select;
      activePlayer.score += selectedQuestion.value;
      update.selectedQuestion = null;
      const findSlectedQuestion: Question = update.quiz.questions.find( question => {
        return question.value === selectedQuestion.value && question.categorie === selectedQuestion.categorie;
      })
      findSlectedQuestion.owner = update.activePlayer;
      update.activePlayer = null;
    }
    game.next(update);
    return true;
  }

  /*
  get Question

  for (let value of foo.keys()) {
    console.log(value);  

  }


  public getAllGames(): Game[] {
    const games: Game = {id: 1}
    return [
    //  games
    ]
  }


  */
}