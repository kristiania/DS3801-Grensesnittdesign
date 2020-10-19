import React, { useState } from 'react';

import Game from './Pages/Game';
import SelectPlayers from './Pages/SelectPlayers';

const App = (props) => {
  const [playGame, setPlayGame] = useState(false);
  const [players, setPlayers] = useState([
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
  ]);

  return (
    <>{playGame ? 
      <Game 
        players={players}
      />
      :
      <SelectPlayers
        players={players}
        handleGameStart={() => {
          setPlayGame(true);
        }}
      />
    }</>
  );
}

export default App;
