import { withKnobs, text } from '@storybook/addon-knobs';
import { StageLobbyComponent } from './stage-lobby.component';

export default { 
  title: 'StageLobby',
  decorators: [
    withKnobs
  ]
}

export const StageLobby = () => ({
  component: StageLobbyComponent,
  props: {
    buzzerUrl: text('buzzer url', 'https://www.google.de/'),
    hostUrl: text('host url', 'https://www.google.de/'),
  },
});