import { withKnobs, text, number, color, select, object } from '@storybook/addon-knobs';
import { PlayerOverviewComponent } from './player-overview.component';
import { PlayerRepresentationComponent } from './player-representation/player-representation.component';
import {  moduleMetadata } from '@storybook/angular';

export default { 
  title: 'PlayerOverview',
  decorators: [
    withKnobs, 
    moduleMetadata({ declarations: [PlayerRepresentationComponent] }) 
  ]
}

const options = {
  Zero: [],
  One: [{name: 'flo', score: 0, color: '#E59726'}],
  Two: [
    {name: 'flo', score: 0, color: '#E59726'},
    {name: 'michi', score: 0, color: '#006B60'}
  ],
  Three: [
    {name: 'flo', score: 0, color: '#E59726'},
    {name: 'michi', score: 0, color: '#006B60'},
    {name: 'Tim', score: 0, color: '#9A2511' },
  ],
  Four: [
    {name: 'flo', score: 0, color: '#E59726'},
    {name: 'michi', score: 0, color: '#006B60'},
    {name: 'Tim', score: 0, color: '#9A2511'},
    {name: 'Dommi', score: 0, color: '#0065BD'},
  ],
  Five: [
    {name: 'flo', score: 0, color: '#E59726'},
    {name: 'michi', score: 0, color: '#006B60'},
    {name: 'Tim', score: 0, color: '#9A2511'},
    {name: 'Dommi', score: 0, color: '#0065BD'},
    {name: 'Edi', score: 0, color: '#78961F'},
  ]
}

export const NumberOfPlayers = () => ({
  component: PlayerOverviewComponent,
  props: {

    players: select('Number of Players', options, [{name: 'flo', score: 0, color:  '#E59726'}])
  },
});

export const ChangeScore = () => ({
  component: PlayerOverviewComponent,
  props: {
    players: [
      {name: 'flo', score: number('Score Player 1', 0), color: '#E59726'},
      {name: 'michi', score: number('Score Player 2', 0), color: '#006B60'},
      {name: 'Tim', score: number('Score Player 3', 0), color: '#9A2511'},
      {name: 'Dommi', score: number('Score Player 4', 0), color: '#0065BD'},
      {name: 'Edi', score: number('Score Player 5', 0), color: '#78961F'},
    ]
  },
});
