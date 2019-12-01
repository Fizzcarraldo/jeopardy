import { withKnobs, boolean  } from '@storybook/addon-knobs';
import { StageLayoutComponent } from './stage-layout.component';

export default { 
  title: 'StageLayout',
  decorators: [withKnobs]
}

export const defaultBuzzerLayout = () => ({
  component: StageLayoutComponent,
  props: {
    gridVisible: boolean('Show grid', true)
  },
});
