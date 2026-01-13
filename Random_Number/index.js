let randomNumber = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const messege = document.querySelector('.lowOrHi')
const result = document.querySelector('.resultParas')

const p = document.createElement('button');

let prevGuess = []
let numGuess = 1
let playGame = true
let newGameBtn = null;

if(playGame){
  submit.addEventListener('click', (e) => {
     e.preventDefault()
     const userValue = parseInt(userInput.value) 
     ValidateUser(userValue)
  });
}

function ValidateUser(userValue){
  if(isNaN(userValue)){
    DisplayMessege('Please enter valid number!')
  }
  else if(userValue < 1){
    DisplayMessege('Please enter a number greater than 0')
  }
  else if(userValue > 100){
    DisplayMessege('Please enter a number less than 100')
  }
  else{
    prevGuess.push(userValue);
    DisplayGuess(userValue);
    CheckGuess(userValue);
  }
}
 
function DisplayGuess(userValue){
  userInput.value='';
  guesses.innerHTML += `${userValue} `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function DisplayMessege(text){
  messege.innerHTML = `<h2> ${text} </h2>`
}

function CheckGuess(userValue){
  if (userValue === randomNumber) {
    DisplayMessege(`You guessed it right`);
    if(numGuess > 10) {
      DisplayMessege(`Game Over. Random number was ${randomNumber}`);
    }
    endGame();
  }
  if(numGuess > 10) {
    DisplayMessege(`Game Over. Random number was ${randomNumber}`);
    endGame();
  }
   else if (userValue < randomNumber) {
    DisplayMessege(`Number is TOOO low`);
  } 
  else if (userValue > randomNumber) {
    DisplayMessege(`Number is TOOO High`);
  }
}

function endGame(){
   p.classList.add('button')
   p.textContent = 'New Game'
   p.addEventListener('click', startGame); 
   result.appendChild(p)
   playGame = false
}

function startGame(){
    randomNumber = parseInt(Math.random() * 100 + 1)
    guesses.innerHTML = ''
    remaining.innerHTML = 10
    prevGuess = []
    numGuess = 1  
    result.removeChild(newGameBtn)
    messege.innerHTML = ' ';
    playGame = true
}