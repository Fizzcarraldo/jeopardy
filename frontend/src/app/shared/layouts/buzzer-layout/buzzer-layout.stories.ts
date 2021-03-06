import { BuzzerLayoutComponent } from './buzzer-layout.component';
import { withKnobs, boolean  } from '@storybook/addon-knobs';

export default { 
  title: 'BuzzerLayout',
  decorators: [withKnobs]
}

export const defaultBuzzerLayout = () => ({
  component: BuzzerLayoutComponent,
  props: {
    gridVisible: boolean('Show grid', true)
  },
});
