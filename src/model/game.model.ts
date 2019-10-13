export enum State {
  Lobby = "Lobby",
  Select = "Select",
  Buzzer = "Buzzer",
  Answer = "Answer",
  GameOver = "GameOver",
}

export class Game {
  id: number;
  players: Player[];
  state: State;
  quiz?: Quiz;
}

export interface Player {
  id: number;
  name: string;
  score: number;
  playerStatus?: PlayerStatus;
}

enum PlayerStatus {
  Inactive,
  Active,
  Answer,
}

export class Quiz {
  id: number;
  categories: Categorie[];
}

export class Categorie {
  name: string;
  displayName: string;
  questions: Question[];
}

export class Question {
  id: number;
  status: string;
  value: number;
  question: string;
  image?: string;
  answer: string;
}