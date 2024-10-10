const wordToGuessElement = document.getElementById('word-to-guess');
const descriptionElement = document.getElementById('description-for-word');
const startGameButton = document.getElementById('start-game');
const gamePlayContainer = document.getElementById('game-play-container');
const inputContainer = document.getElementById('input-container');

startGameButton.addEventListener('click', () => {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = descriptionElement.value;
    gamePlayContainer.appendChild(descriptionDiv);
    const letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let letter of letterArray) {
        const letterButton = document.createElement('button');
        letterButton.textContent = letter;
        gamePlayContainer.appendChild(letterButton);
    }

    const lettersGuessed = document.createElement('div');

    let word = wordToGuessElement.value; 'apple'
    for (let _ of word) {
        const input = document.createElement('input');
        input.disabled = true;
        input.style.width = '20px';
        lettersGuessed.appendChild(input);
    }

    gamePlayContainer.appendChild(lettersGuessed);

    gamePlayContainer.style.visibility = 'visible';
    inputContainer.style.visibility = 'hidden';
})