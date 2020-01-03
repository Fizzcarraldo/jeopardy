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
  quizOverview?: QuizOverview;
  selectedQuestion?: SelectedQuestion;
}

export class Stage {
  state: String;
  players: Player[];
  quizOverview?: QuizOverview;
  activePlayer: number;
}

export class QuizOverview {
  categories: Category[];
  questionRows: QuestionRow[];
}

export class QuestionRow {
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
  name: string;
  score: number;
}

export class SelectedQuestion {
  category: String;
  value: number;
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

export class Question {
  id: number;
  category: string;
  value: number;
  question: string;
  image?: string;
  answer: string;
}