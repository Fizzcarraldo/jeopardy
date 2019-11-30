import { storiesOf, moduleMetadata } from '@storybook/angular';
import { BuzzerComponent } from './buzzer.component';
import { action } from '@storybook/addon-actions';

import { withKnobs,
  number,
} from '@storybook/addon-knobs';

export default { title: 'Buzzer',
decorators: [withKnobs] }

export const defaultBuzzer = () => ({
  component: BuzzerComponent,
  props: {
    onClick: action('Buuzer was clicked')
  }

});

export const withSomeEmojiAndAction = () => ({
  component: BuzzerComponent,
  props: {
    price: number('price', 2.25),
    onClick: action('This was clicked OMG'),
  },
});

export const disabledBuzzer = () => ({
  component: BuzzerComponent,
  props: {
    disabled: true,
  },

});