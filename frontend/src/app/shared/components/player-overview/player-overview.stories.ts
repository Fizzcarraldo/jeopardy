import { withKnobs, text, number, color, select } from '@storybook/addon-knobs';
import { PlayerOverviewComponent } from './player-overview.component';
import { Player } from '../../game.model';

export default { 
  title: 'PlayerOverview',
  decorators: [withKnobs]
}

const options = {
  Zero: [],
  One: [{name: 'flo', score: 0}],
  Two: [
    {name: 'flo', score: 0},
    {name: 'michi', score: 0}
  ],
  Three: [
    {name: 'flo', score: 0},
    {name: 'michi', score: 0},
    {name: 'Tim', score: 0},
  ],
  Four: [
    {name: 'flo', score: 0},
    {name: 'michi', score: 0},
    {name: 'Tim', score: 0},
    {name: 'Dommi', score: 0},
  ],
  Five: [
    {name: 'flo', score: 0},
    {name: 'michi', score: 0},
    {name: 'Tim', score: 0},
    {name: 'Dommi', score: 0},
    {name: 'Edi', score: 0},
  ]
}

export const NumberOfPlayers = () => ({
  component: PlayerOverviewComponent,
  props: {
    //players:  [{name: 'flo', score: 0}],
    players: select('Number of Players', options, [{name: 'flo', score: 0}])
  },
});

export const ChangeScore = () => ({
  component: PlayerOverviewComponent,
  props: {
    players: [
      {name: 'flo', score: number('Score Player 1', 0)},
      {name: 'michi', score: number('Score Player 2', 0)},
      {name: 'tim', score: number('Score Player 3', 0)},
      {name: 'dommi', score: number('Score Player 4', 0)}
    ]
  },
});
