import React, { Component } from 'react';

import Game from './Game';
import SelectPlayers from './SelectPlayers';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Player 1',
          score: 0
        },
        {
          name: 'Player 2',
          score: 0
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
    <React.Fragment>{
      this.state.playGame ? 
      <Game 
        players={this.state.players}
        handleAddEvent={this.handleAddEvent}
        handleSubtractEvent={this.handleSubtractEvent}
        handleReset={this.handleReset}
      />
      :
      <SelectPlayers
        players={this.state.players}
        changePlayerName={this.changePlayerName}
        resetName={this.resetName}
        handleGameStart={this.handleGameStart}
      />
    }</React.Fragment>
  );
}

export default App;
