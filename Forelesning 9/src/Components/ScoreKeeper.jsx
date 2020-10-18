import React from 'react';

import Button from './Button';

const ScoreKeeper = (props) => {

    const updateAddEvent = () => {
        props.handleAddEvent(props.player);
    }

    const updateSubtractEvent = () => {
        props.handleSubtractEvent(props.player);
    }

    return (
        <div className={props.className}>
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