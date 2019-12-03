import { NumberSymbol } from '@angular/common';

export enum State {
  Lobby = "Lobby",
  Select = "Select",
  Buzzer = "Buzzer",
  Answer = "Answer",
  GameOver = "GameOver",
}

export enum VerifyOption {
  Right = "Right",
  Wrong = "Wrong",
}

export class Game {
  players: Map <number, Player>;
  activePlayer: Player;
  activeQuestion: Question;
  state: State;
  quiz?: Quiz;
}

export class Buzzer {
  playerId: number;
  gameId: number;
  player: Player;
  state: State;
}

export interface Player {
  name: string;
  score: number;
  color: string;
  id: number;
}

export class Quiz {
  id: number;
  categories: Categorie[];
  questions: Question[];
}

export class Categorie {
  id: string;
  displayName: string;
}

export class Question {
  categorie: String;
  owner: number;
  status: string;
  value: number;
  question: string;
  image?: string;
  answer: string;
}

export class SelectedQuestion {
  categorie: string;
  value: number;
}