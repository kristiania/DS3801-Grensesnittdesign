const root = document.getElementById('root');

let players = [
    {
        name: 'playerOne',
        score: 0
    },
    {
        name: 'playerTwo',
        score: 0
    },
];

const resetButtonPressed = () => {
    players.forEach(player => {
        player.score = 0;
        updateScore(player);

        document
            .getElementById(`score-keeper-for-player-${player.name}`)
            .classList.remove("winner");
    });
};

const createResetButton = (parent) => {
    const reset = document.createElement('button');
    reset.type = "button";
    reset.innerText = 'Reset';
    reset.className = 'reset-button';
    reset.addEventListener('click', resetButtonPressed);
    parent.appendChild(reset);
};

const doWeHaveAWinner = () => {
    if (players[0].score >= 11 && players[0].score >= players[1].score + 2) {
        return true;
    } else if (players[1].score >= 11 && players[1].score >= players[0].score + 2) {
        return true;
    } else {
        return false;
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
};

const updateScore = (player) => {
    const score = document.getElementById(`score-keeper-for-player-${player.name}`);
    score.innerHTML = player.score;
};

const handleScoreChange = (player, button, scoreUpdaterMethod) => {
    button.addEventListener('click', () => {
        if (!doWeHaveAWinner()) {
            player.score = scoreUpdaterMethod(player.score);
            updateScore(player);
            
            if (doWeHaveAWinner()) {
                updateWinner();
                console.log('We have a winner!');
            }
        }
    });
};

const createInput = (player) => {
    const subtractButton = document.createElement('button');
    subtractButton.type = 'button';
    subtractButton.classList.add('increment-button');
    subtractButton.innerText = '-';

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.classList.add('increment-button');
    addButton.innerText = '+';
    
    const container = document.createElement('div');
    container.classList.add('player-box')

    container.innerHTML = `<h1 class='score' id='score-keeper-for-player-${player.name}'>${player.score}</h1>`;
    container.appendChild(subtractButton);
    container.appendChild(addButton);

    handleScoreChange(player, addButton, (number) => number + 1);
    handleScoreChange(player, subtractButton, (number) => number > 0 ? number - 1: number);

    return container;
};

players.map(player => {
    root.appendChild(
        createInput(player)
    );
});

createResetButton(root);