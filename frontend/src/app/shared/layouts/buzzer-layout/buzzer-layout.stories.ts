import { action } from '@storybook/addon-actions';
import { BuzzerLayoutComponent } from './buzzer-layout.component';

export default { title: 'BuzzerLayout'}

export const defaultBuzzerLayout = () => ({
  component: BuzzerLayoutComponent,
});

export const developmentBuzzerLayout = () => ({
  component: BuzzerLayoutComponent,
  props: {
    development: true,
  },
});
