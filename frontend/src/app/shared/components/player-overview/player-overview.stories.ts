import { withKnobs, text, number, color, select, radios } from '@storybook/addon-knobs';
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
  One: [{name: 'flo', score: 0, color: 'player1', id: 1}],
  Two: [
    {name: 'flo', score: 0, color: 'player1', id: 1},
    {name: 'michi', score: 0, color: 'player2', id: 2}
  ],
  Three: [
    {name: 'flo', score: 0, color: 'player1', id: 1},
    {name: 'michi', score: 0, color: 'player2', id: 2},
    {name: 'Tim', score: 0, color: 'player3', id: 3},
  ],
  Four: [
    {name: 'flo', score: 0, color: 'player1', id: 1},
    {name: 'michi', score: 0, color: 'player2', id: 2},
    {name: 'Tim', score: 0, color: 'player3', id: 3},
    {name: 'Dommi', score: 0, color: 'player4', id: 4},
  ],
  Five: [
    {name: 'flo', score: 0, color: 'player1', id: 1},
    {name: 'michi', score: 0, color: 'player2', id: 2},
    {name: 'Tim', score: 0, color: 'player3', id: 3},
    {name: 'Dommi', score: 0, color: 'player4', id: 4},
    {name: 'Edi', score: 0, color: 'player5', id: 5},
  ]
}

export const NumberOfPlayers = () => ({
  component: PlayerOverviewComponent,
  props: {
    players: select('Number of Players', options, [{name: 'flo', score: 0, color: 'player1', id: 1}])
  },
});

export const ChangeScore = () => ({
  component: PlayerOverviewComponent,
  props: {
    players: [
      {name: 'flo', score: number('Score Player 1', 0), color: 'player1', id: 1},
      {name: 'michi', score: number('Score Player 2', 0), color: 'player2', id: 2},
      {name: 'Tim', score: number('Score Player 3', 0), color: 'player3', id: 3},
      {name: 'Dommi', score: number('Score Player 4', 0), color: 'player4', id: 4},
      {name: 'Edi', score: number('Score Player 5', 0), color: 'player5', id: 5},
    ]
  },
});

const activePlayerOptions = {
  none: undefined,
  flo: 1,
  michi: 2,
  Tim: 3,
  Dommi: 4,
  Edi: 5,
};

export const ActivePlayer = () => ({
  component: PlayerOverviewComponent,
  props: {
    activePlayer: select('Active Player', activePlayerOptions, undefined),
    players: [
      {name: 'flo', score: 0, color: 'player1', id: 1},
      {name: 'michi', score: 0, color: 'player2', id: 2},
      {name: 'Tim', score: 0, color: 'player3', id: 3},
      {name: 'Dommi', score: 0, color: 'player4', id: 4},
      {name: 'Edi', score: 0, color: 'player5', id: 5},
    ]
  },
});