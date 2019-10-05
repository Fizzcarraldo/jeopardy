export interface Quiz {
  id: number;
  name: string;
  categories: Categorie[];
}

export interface Categorie {
  id: number;
  name: string;
  questions: Question[];
}

export interface Question {
  id: number;
  value: number;
  question: string;
  answer: string;
}
