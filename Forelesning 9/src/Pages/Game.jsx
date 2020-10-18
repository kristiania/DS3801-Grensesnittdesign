import React, {useEffect, useState} from 'react';

import Button from '../Components/Button';
import ScoreKeeper from '../Components/ScoreKeeper';

const  Game = (props) => {
  const [players, setPlayers] = useState(props.players);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const playerOne = players[0];
    const playerTwo = players[1];

    if (playerOne.score >= 11 && playerOne.score >= playerTwo.score + 2) {
      setGameOver(true);
    } else if (playerTwo.score >= 11 && playerTwo.score >= playerOne.score + 2) {
      setGameOver(true);
    } else {
      setGameOver(false);
    }

  }, [players, gameOver]);


  const handlePlayerChange = (funct) => {
    let newPalyers = [...players];
    newPalyers.forEach(_player => 
      funct(_player)
    );
    setPlayers(newPalyers);
  }

  const handleAddEvent = (player) => {
    handlePlayerChange(_player => {
      if (_player.name === player.name && !gameOver) {
        _player.score++;
      }
    });
  };

  const handleSubtractEvent = (player) => {
    handlePlayerChange(_player => {
      if (_player.name === player.name && _player.score > 0) {
        _player.score--;
      }
    });
  };

  const handleReset = () => {
    handlePlayerChange(_player => {
      _player.score = 0;
    });
  };

  return (
    <React.Fragment>
      {players.map(player => 
        <ScoreKeeper 
          key={player.name}
          player={player}
          className={'score-bord'}
          handleAddEvent={handleAddEvent}
          handleSubtractEvent={handleSubtractEvent}
        />
      )}

      <Button 
          title='Reset'
          className='reset-button'
          onClick={handleReset}
      />
    </React.Fragment>
  );
}

export default Game;
