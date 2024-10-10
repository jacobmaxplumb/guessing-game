const wordToGuessElement = document.getElementById('word-to-guess');
const descriptionElement = document.getElementById('description-for-word');
const startGameButton = document.getElementById('start-game');
const gamePlayContainer = document.getElementById('game-play-container');
const inputContainer = document.getElementById('input-container');
let word = null;

function startGame() {
    addDescriptionToGamePlayScreen();
    setWord();
    makeLetterButtonsAndAddToGamePlayScreen();
    makeGuessesInputsAndAddToGamesPlayScreen();
    toggleAreas();
}

function addDescriptionToGamePlayScreen() {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = descriptionElement.value;
    gamePlayContainer.appendChild(descriptionDiv);
}

function setWord() {
    word = wordToGuessElement.value;
}

function makeLetterButtonsAndAddToGamePlayScreen() {
    const letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let letter of letterArray) {
        const letterButton = document.createElement('button');
        letterButton.textContent = letter;
        letterButton.addEventListener('click', () => {
            handleButtonClick(letterButton);
            isGameOver();
        });
        gamePlayContainer.appendChild(letterButton);
    }
}

function makeGuessesInputsAndAddToGamesPlayScreen() {
    const lettersGuessed = document.createElement('div');

    for (let _ of word) {
        const input = document.createElement('input');
        input.disabled = true;
        input.style.width = '20px';
        input.classList.add('letter-input');
        lettersGuessed.appendChild(input);
    }

    gamePlayContainer.appendChild(lettersGuessed);
}

function isGameOver() {
    const inputsInQuestion = document.querySelectorAll('.letter-input');
    let gameIsFinished = true;
    for (let input of inputsInQuestion) {
        if (input.value === '') gameIsFinished = false;
    }
    if (gameIsFinished) {
        alert(`You won,  you guess the word: ${word} correctly`);
        window.location.reload();
    }
}

function toggleAreas() {
    if (inputContainer.style.visibility === 'visible') {
        gamePlayContainer.style.visibility = 'visible';
        inputContainer.style.visibility = 'hidden';
    } else {
        gamePlayContainer.style.visibility = 'hidden';
        inputContainer.style.visibility = 'visible';
    }
}

function handleButtonClick(button) {
    button.disabled = true;
    const letterClicked = button.textContent;
    const inputsInQuestion = document.querySelectorAll('.letter-input');
    for (let i = 0; i < word.length; i++) {
        const letterInWord = word[i];
        if (letterInWord === letterClicked) {
            inputsInQuestion[i].value = letterClicked;
        }
    }
}

startGameButton.addEventListener('click', () => startGame())