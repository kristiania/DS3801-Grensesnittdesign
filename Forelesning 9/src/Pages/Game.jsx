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
      players[0].isWinner = true;
      setGameOver(true);
    } else if (playerTwo.score >= 11 && playerTwo.score >= playerOne.score + 2) {
      players[1].isWinner = true;
      setGameOver(true);
    } else {
      players[0].isWinner = false;
      players[1].isWinner = false;
      setGameOver(false);
    }

  }, [players]);


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
    <>
      {players.map(player => 
        <ScoreKeeper 
          key={player.name}
          player={player}
          className={player.isWinner ? 'score-bord winner' : 'score-bord'}
          handleAddEvent={handleAddEvent}
          handleSubtractEvent={handleSubtractEvent}
        />
      )}

      <Button 
          title='Reset'
          className='reset-button'
          onClick={handleReset}
      />
    </>
  );
}

export default Game;
