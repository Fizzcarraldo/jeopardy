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
  selectedQuestin?: SelectedQuestion;
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