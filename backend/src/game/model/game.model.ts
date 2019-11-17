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
  activePlayer: number;
  state: State;
  quiz?: Quiz;
  selectedQuestion?: SelectedQuestion;
}

export interface Player {
  name: string;
  score: number;
}

export class SelectedQuestion {
  categorie: String;
  value: number;
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
  id: number;
  categorie: string;
  owner: number;
  value: number;
  question: string;
  image?: string;
  answer: string;
}