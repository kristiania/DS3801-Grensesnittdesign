import React, {useState} from 'react';

import Button from './Button';

const SelectPlayer = (props) => {
    const [name, setName] = useState('');

    const handleNameChange = () => {
        props.changePlayerName(props.player, name);
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleResetName = () => {
        props.resetName(props.player);
    };

    return (
        <React.Fragment>
            <h1>{props.player.name}</h1>
            {props.selectedName ?
                <Button
                    title="Endre navn"
                    onClick={handleResetName}
                />
                :
                <React.Fragment>
                        <input 
                        type="text" 
                        placeholder='Skriv inn spiller navn'
                        value={name}
                        onChange={handleChange}
                    />
                    <Button
                        title="Legg til"
                        onClick={handleNameChange}
                        disabled={name.length === 0}
                    />
                </React.Fragment>
            }
        </React.Fragment>
    );

};

export default SelectPlayer;