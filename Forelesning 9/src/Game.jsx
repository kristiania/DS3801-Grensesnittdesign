import React, { Component } from 'react';

import Button from './Components/Button';
import ScoreKeeper from './ScoreKeeper';

const  Game = (props) => {
    //Functions

    return (
      <React.Fragment>
        {props.players.map(player => 
          <ScoreKeeper 
            key={player.name}
            player={player}
            handleAddEvent={props.handleAddEvent}
            handleSubtractEvent={props.handleSubtractEvent}
          />
        )}

        <Button 
            title='Reset'
            className='reset-button'
            onClick={props.handleReset}
        />
      </React.Fragment>
    );
}

export default Game;
