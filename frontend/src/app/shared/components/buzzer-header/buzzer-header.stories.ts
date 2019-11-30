import { BuzzerHeaderComponent } from './buzzer-header.component';
import { withKnobs, text, number, color, select } from '@storybook/addon-knobs';

export default { 
  title: 'BuzzerHeader',
  decorators: [withKnobs]
}

const options = {
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow',
};

export const BuzzerHeader = () => ({
  component: BuzzerHeaderComponent,
  props: {
    name: text('Name', 'Flo'),
    score: number('Score', 0),
    playerColor: select('PlayerColor', options, 'red')
  },
});

