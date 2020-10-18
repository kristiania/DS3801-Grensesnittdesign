import React, { Component } from 'react';

import Game from './Pages/Game';
import SelectPlayers from './Pages/SelectPlayers';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Player 1',
          score: 0,
          isWinner: false
        },
        {
          name: 'Player 2',
          score: 0,
          isWinner: false
        }
      ],
      playGame: false
    };
  }

  handleGameStart = () => {
    let newState = this.state;
    newState.playGame = true;
    this.setState(newState);
  }

  render = () => (
    <>{
      this.state.playGame ? 
      <Game 
        players={this.state.players}
        handleReset={this.handleReset}
      />
      :
      <SelectPlayers
        players={this.state.players}
        handleGameStart={this.handleGameStart}
      />
    }</>
  );
}

export default App;
