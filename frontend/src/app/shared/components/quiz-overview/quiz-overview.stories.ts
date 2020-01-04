import { withKnobs, text, number, color, select, radios, object } from '@storybook/addon-knobs';
import {  moduleMetadata } from '@storybook/angular';
import { QuestionRow, QuizOverview } from '../../game.model';
import { QuestionComponent } from './question/question.component';
import { QuestionRowComponent } from './question-row/question-row.component';
import { QuizContainerComponent } from './quiz-container/quiz-container.component';
import { CategorieComponent } from './categorie/categorie.component';


//const quiz: Quiz = require("../../../../../../mock-data/demo_quiz.json");

export default { 
  title: 'QuizOverview',
  decorators: [
    withKnobs,
    moduleMetadata({ declarations: [QuestionComponent, QuestionRowComponent, CategorieComponent] }) 
  ]
}

const colors = {
  default: 'black',
  grey: '#8A8A8A',
  yellow: '#E59726',
  turquoise: '#006B60',
  red: '#9A2511',
  blue: '#0065BD',
  green: '#78961F'
} 

const values = {
  '100': 100,
  '200': 200,
  '300': 300,
  '400': 400,
  '500': 500
} 

export const CategorieView = () => ({
  component: CategorieComponent,
  props: {
    displayName: text('Name', 'sport') 
  },
});

export const Queston = () => ({
  component: QuestionComponent,
  props: {
    questionThumbnail: {
      color: select('Color', colors, '#8A8A8A'),
      value: select('Values', values, 100)
    }
  },
});

const questionRow = {
  questionThumbnails: [
    {
      "value": 100,
      "color": 'black',
    },
    {
        "value": 200,
        "color": 'black',
    },
    {
        "value": 300,
        "color": 'black',
    },
    {
        "value": 400,
        "color": 'black',
    },
    {
        "value": 500,
        "color": 'black',
    }
  ]
}

export const QuestonRowView = () => ({
  component: QuestionRowComponent,
  props: {
    questionRow: object('Questions', questionRow)
  },
});

const quizOverview: QuizOverview = {
  categories: [
    {
      "id": "history",
      "displayName": "Geschichte"
    }, {
      "id": "animals",
      "displayName": "Tiere"
    }, {
      "id": "film",
      "displayName": "Film"
    }, {
      "id": "sports",
      "displayName": "Sport"
    },  {
      "id": "geopraphy",
      "displayName": "Geografie"
    }
  ],
  questionRows: [
    questionRow,
    questionRow,
    questionRow,
    questionRow,
    questionRow
  ]
}

export const QuizContainerView = () => ({
  component: QuizContainerComponent,
  props: {
    quizContainer: object('Quiz', quizOverview)
  },
});

