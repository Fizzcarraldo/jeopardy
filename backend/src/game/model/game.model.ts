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
  questionsAnswered: number;
  players: Map <number, Player>;
  activePlayer: number;
  state: State;
  questionRows: QuestionRow[];
  activeQuestion?: Question;
}

export class Stage {
  state: String;
  players: Player[];
  questionRows: QuestionRow[];
  activePlayer: number;
  activeQuestion?: Question;
}

export class QuestionRow {
  category: Category;
  questionThumbnails: QuestionThumbnail[]
}

export class QuestionThumbnail {
  color?: String;
  value: number;
}

export class Buzzer {
  playerId: number;
  gameId: number;
  state: State;
  player: Player;
}

export interface Player {
  id: number;
  name: string;
  color: string;
  score: number;
}

export class Question {
  category: String;
  value: number;
  question: string;
  answer: string;
}

export class Quiz {
  id: number;
  categories: Category[];
  questions: Question[];
}

export class Category {
  id: string;
  displayName: string;
}
