const root = document.getElementById('root');

let players = [
    {
        name: 'Player 1',
        score: 0
    },
    {
        name: 'Player 2',
        score: 0
    },
];

const createButton = (buttonText, buttonClassName, buttonId, buttonFunction) => {
    const button = document.createElement('button');
    button.type = "button";
    button.innerText = buttonText;

    if (buttonClassName !== null && buttonClassName !== undefined) {
        if (typeof buttonClassName === "string") {
            button.className = buttonClassName;
        } else {
            buttonClassName.forEach(className => {
                button.classList.add(className);
            });
        }
    }

    if (buttonId !== null && buttonId !== undefined) {
        button.id = buttonId;
    }
    
    button.addEventListener('click', buttonFunction);
    return button;
};

const resetButtonPressed = () => {

    players.forEach(player => {
        player.score = 0;
        updateScoreOnScreen(player);

        const winnerScore = document.getElementById(`score-keeper-for-player-${player.name}`);
        winnerScore.classList.remove("winner");
    });

    handleWinnerText(null);
};


const doWeHaveAWinner = () => {
    if (players[0].score >= 11 && players[0].score >= players[1].score + 2||
        players[1].score >= 11 && players[1].score >= players[0].score + 2) {
        return true;
    }
    return false;
};

const handleWinnerText = (winner) => {
    if (winner !== null && winner !== undefined) {
        const winnerText = document.createElement('h1');
        winnerText.classList.add('winner');
        winnerText.id = 'winner-text';
        winnerText.textContent = `${winner.name} is the winner!`;
        root.appendChild(winnerText);
    } else {
        const winnerText = document.getElementById('winner-text');
        if (winnerText !== null && winnerText !== undefined) {
            root.removeChild(winnerText);
        }
    }
};

const updateWinner = () => {

    let winner = players[1];

    if (players[0].score >= 11 && players[0].score >= players[1].score + 2) {
        winner = players[0];
    }
    
    document
        .getElementById(`score-keeper-for-player-${winner.name}`)
        .classList.add('winner');  

    handleWinnerText(winner);

};

const updateScoreOnScreen = (player) => {
    const score = document.getElementById(`score-keeper-for-player-${player.name}`);
    score.innerHTML = player.score;
};

const handleScoreChange = (player, scoreUpdaterMethod) => {
    if (!doWeHaveAWinner()) {
        player.score = scoreUpdaterMethod(player.score);
        updateScoreOnScreen(player);
        
        if (doWeHaveAWinner()) {
            updateWinner();
        }
    }
};

const createPlayerInputHandler = (player) => {
    const subtractButton = createButton('-', 'increment-button', null, () => {
        handleScoreChange(player, (number) => number > 0 ? number - 1: number);
    });

    const addButton = createButton('+', 'increment-button', null, () => {
        handleScoreChange(player, (number) => number + 1);
    });
    
    const container = document.createElement('div');
    container.classList.add('player-box');
    container.innerHTML = `
        <h1 class='score' id='score-keeper-for-player-${player.name}'>${player.score}</h1>
        <h4 class='player-name'>${player.name}</h4>
    `;
    container.appendChild(subtractButton);
    container.appendChild(addButton);

    return container;
};

// Last Game Screen function
const createGame = (parent) => {
    players.map(player => {
        parent.appendChild(
            createPlayerInputHandler(player)
        );
    });

    const resetButton = createButton('Reset', ['reset-button'], null, resetButtonPressed);
    parent.appendChild(resetButton);
};

const startGame = () => {
    if (players[0].name !== 'Player 1' && players[1].name !== 'Player 2') {
        return players[0].name !== players[1].name;
    }
};

const startGameButton = (parent, shoudGameStart) => {
    if (shoudGameStart) {
        
        const gameButton = createButton('Start Game!', null, 'start-game-button', () => {
            parent.innerHTML = null;
            createGame(parent);
        });

        parent.appendChild(gameButton);
        
    } else {
        const gameButton = document.getElementById('start-game-button');
        if (gameButton !== null) {
            parent.removeChild(gameButton);
        }
    }
};

const createPlayerNameInput = (player, parent) => {
    let firstNamePlayerHad = player.name;

    const container = document.createElement('div');
    const nameTitle = document.createElement('h2');
    nameTitle.textContent = player.name;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Skriv inn spillers navn';
    
    const addNameButton = createButton('Legg til', null, null, () => {
        if (input.value !== firstNamePlayerHad && input.value.length > 0) {
            nameTitle.textContent = input.value;
            player.name = input.value;
    
            addNameButton.textContent = 'Endre navn';
            container.removeChild(input);

        } else {
            nameTitle.textContent = firstNamePlayerHad;
            addNameButton.textContent = 'Legg til';

            player.name = firstNamePlayerHad;
            
            container.innerHTML = null;
            container.appendChild(nameTitle);
            container.appendChild(input);
            container.appendChild(addNameButton);
        }

        startGameButton(parent, startGame());
    });

    container.appendChild(nameTitle);
    container.appendChild(input);
    container.appendChild(addNameButton);
    parent.appendChild(container);
};


/* ******************************** Running Code ******************************** */

players.forEach(player => createPlayerNameInput(player, root));
