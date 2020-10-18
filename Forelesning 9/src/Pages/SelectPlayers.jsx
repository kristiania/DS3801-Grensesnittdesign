import React, {useEffect, useState} from 'react';

import Button from '../Components/Button';
import SelectPlayer from '../Components/SelectPlayer';;


const SelectPlayers = (props) => {
    const [gameCanStart, setGameCanStart] = useState(false);
    const [players, setPlayers] = useState(props.players);

    useEffect(()=> {

        const namesNotChanged = players.filter((_player, index) => 
            _player.name === `Player ${1+index}`
        );

        setGameCanStart(namesNotChanged.length === 0);
        
    },[players, gameCanStart]);

    const handleStateChange = (funct) => {
        let newPlayers = [...players];
    
        newPlayers.forEach((_player, index) => 
            funct(_player, index)
        );
    
        setPlayers(newPlayers);
    }

    const handleNameChange = (player, newName) => {
        handleStateChange(_player => {
            if (_player.name === player.name) {
                _player.name = newName;
            }
        });
    };
    
    const resetName = (player) => {
        handleStateChange((_player, index) => {
            if (_player.name === player.name) {
                _player.name = `Player ${1+index}`;
            }
        });
    }

    return (
        <React.Fragment>
            {players.map((player, index) =>
                <SelectPlayer 
                    key={player.name + index}
                    player={player}
                    changePlayerName={handleNameChange}
                    resetName={resetName}
                    selectedName={player.name !== `Player ${1+index}`} 
                />
            )}
            {gameCanStart &&
                <Button
                    title='Start Game'
                    onClick={props.handleGameStart}
                    className='game-start-button'
                />
            }
        </React.Fragment>
    );
}

export default SelectPlayers;