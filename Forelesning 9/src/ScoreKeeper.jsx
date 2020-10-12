import React from 'react';

import Button from './Components/Button';

const ScoreKeeper = (props) => {

    const updateAddEvent = () => {
        const player = props.player;
        props.handleAddEvent(player);
    }

    const updateSubtractEvent = () => {
        const player = props.player;
        props.handleSubtractEvent(player);
    }

    return (
        <div className='score-bord'>
            <h1>{props.player.score}</h1>
            <h3>{props.player.name}</h3>
            <div className='button-div'>
                <Button 
                    title='+'
                    className='update-button'
                    onClick={updateAddEvent}
                />
                <Button 
                    title='-'
                    className='update-button'
                    onClick={updateSubtractEvent}
                />
            </div>
      </div>
    );
}

export default ScoreKeeper;