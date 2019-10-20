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
  activePlayer: Player;
  activeQuestion: Question;
  state: State;
  quiz?: Quiz;
}

export interface Player {
  id: number;
  name: string;
  score: number;
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
  owner: Player;
  status: string;
  value: number;
  question: string;
  image?: string;
  answer: string;
}