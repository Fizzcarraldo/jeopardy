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

export class Stage {
  state: State;
  players: Player[];
  questionRows: QuestionRow[]
}

export class Game {
  players: Map <number, Player>;
  activePlayer: Player;
  activeQuestion: number;
  state: State;
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

export class Category {
  id: string;
  displayName: string;
}

export class QuestionRow {
  category: Category;
  questionThumbnails: QuestionThumbnail[]
}

export class QuestionThumbnail {
  color?: String;
  value: number;
}

export class SelectedQuestion {
  category: string;
  value: number;
}