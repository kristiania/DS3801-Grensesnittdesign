import React, { Component } from 'react';

import Game from './Game';

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
      ]
    };
  }

  handleAddEvent = (player) => {
    let newState = this.state;

    newState.players.forEach(_player => {
      if (_player.name === player.name) {
        _player.score++;
      }
    });

    this.setState(newState);
  };

  handleSubtractEvent = (player) => {
    let newState = this.state;
    
    newState.players.forEach(_player => {
      if (_player.name === player.name && _player.score > 0) {
          _player.score--;
      }
    });

    this.setState(newState);
  };

  handleReset = () => {
    this.setState({
      players: [
        {
          name: 'Player 1',
          score: 0
        },
        {
          name: 'Player 2',
          score: 0
        }
      ]
    });
  };

  render() {
    return (
      <React.Fragment>
        <Game 
          players={this.state.players}
          handleAddEvent={this.handleAddEvent}
          handleSubtractEvent={this.handleSubtractEvent}
          handleReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
