enum State {
    Lobby,
    Select,
    Buzzer,
    Answer,
    GameOver
}

export class Game {
  id: string;
  players: Player[];
  state: State;
  Quiz: Quiz;
}

export interface Player {
  id: number;
  name: string;
  score: number;
  playerStatus: PlayerStatus;
}

enum PlayerStatus {
  Inactive,
  Active,
  Answer,
}

export class Quiz {
  id: string;
  categories: Categorie[];
}

export class Categorie {
  name: string;
  displayName: string;
  questions: Question[];
}

export class Question {
  owner: string;
  value: number;
  question: string;
  image?: string;
  answer: string;
}