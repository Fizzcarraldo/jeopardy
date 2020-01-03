import { withKnobs, text  } from '@storybook/addon-knobs';
import { QuestionDetailComponent } from './question-detail.component';

export default { 
  title: 'QuestionDetail',
  decorators: [withKnobs]
}

export const QuestionDetail = () => ({
  component: QuestionDetailComponent,
  props: {
    question: text('Question', 'Der kanadische Fernsehsportler ist bekannt für seine Rolle als Hockey Night in Canada, eine Kommentarshow bei Hockeyspielen.')
  },
});
