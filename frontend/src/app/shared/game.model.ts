export enum State {
  Lobby = "Lobby",
  Select = "Select",
  Buzzer = "Buzzer",
  Answer = "Answer",
  GameOver = "GameOver",
}

export class Game {
  players: Map <number, Player>;
  activePlayer: Player;
  activeQuestion: Question;
  state: State;
  quiz?: Quiz;
}

export interface Player {
  name: string;
  score: number;
}

export class Quiz {
  id: number;
  categories: Categorie[];
  questions: Question[];
}

export class Categorie {
  name: string;
  displayName: string;
}

export class Question {
  categorie: String;
  owner: Player;
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