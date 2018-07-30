//SET GAME VARIABLES
let min = 1,
    max = 10,
    winningNum = randomNum(max,min),
    guesses = 3;

//grab UI elements
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const numGuess = document.querySelector('.number-guess-box input[name="number-guess"]');
const guessBtn = document.querySelector('.game-input input[name="submit-btn"]');
const gameMsg = document.querySelector('.game-message p');

//set max and min ui
minNum.textContent = min;
maxNum.textContent = max;

//hear for a click of a guess & execute the game
guessBtn.addEventListener('click',game);
//hear for a focus on the input to clear any messages
numGuess.addEventListener('focus',clearMsg);


/*** FUNCTIONS  ***/
//GAME function
function game(){
  //check if the 'play again' button is pressed
  if (guessBtn.value === 'play again?') {
    window.location.reload();
  }
  //turn the guess input from a string into an integers
  let guess = parseInt(numGuess.value);
  //validate that the number entered was between the min and max
  if (isNaN(guess) || guess < min || guess > max) {
    showMsg(`Check your number`,false);
    inputOL(false);
  } else {
    //check if they got the number correct
    if (guess === winningNum) {
      gameSt(`YOU WON, ${winningNum} was the number!`,true);

    } else {
      guesses -= 1;
      if (guesses === 0) {
        gameSt(`GAME OVER, ${guesses} guesses left.`,false);
        controllerUI(false);
      } else {
        showMsg(`Nope, ${guesses} guesses left.`,false)
        inputOL(false);
        numGuess.value = '';
      }
    }
  }
}

//GAME STATE
function gameSt(msg,b){
  controllerUI(b);
  showMsg(msg,b);
  inputOL(b);
  guessBtn.value = 'play again?';
  numGuess.disabled = 'true';
  if (b) {
    document.querySelector('.game-input input[name="submit-btn"]').style.backgroundColor='#6FCC75';
  } else {
    document.querySelector('.game-input input[name="submit-btn"]').style.backgroundColor='red';
  }
}

//random number generator
function randomNum(maxN,minN){
  return Math.floor(Math.random()*(maxN-minN+1)+minN);
}

//show message function
function showMsg(msg,b){
  color = b ? 'green': 'red';
  gameMsg.textContent = msg;
  gameMsg.style.color = color;
}

//clear message function
function clearMsg(){
  gameMsg.textContent = '';
  numGuess.style.borderColor = 'lightgray';
}

//input ux for right or wrong
function inputOL(b){
  b ? numGuess.style.borderColor = 'green' : numGuess.style.borderColor = 'red';
}

//game controller UI
function controllerUI(b){
  if (b) {
    document.querySelector('.title i').style.transform = 'rotate(360deg)';
    document.querySelector('.title h2').style.color = '#6FCC75';
  } else {
    document.querySelector('.title i').style.transform = 'rotate(360deg)';
    document.querySelector('.title h2').style.color = 'red';
  }
}
