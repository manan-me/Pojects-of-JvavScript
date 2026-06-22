let randonNum=parseInt(Math.random()*100+1);

const submit=document.getElementById("subt")
const userInput=document.getElementById("guessField")
const guesses=document.getElementsByClassName("guesses")[0]
const leftguess=document.getElementsByClassName("lastResult")[0]
const lowOrHigh=document.getElementsByClassName("lowOrHi")[0]
const startOver=document.getElementsByClassName("resultParas")[0]

const para=document.createElement('p');

let preGuesses= [];
let numOfGuesses=1;     
let playGame=true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const userGuess= parseInt(userInput.value);
        validateGuess(userGuess);
    })
}

function validateGuess(userGuess){
    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        alert("Please enter a valid number between 1 and 100");
    } 
    else{
        preGuesses.push(userGuess);
        if(numOfGuesses === 11){
            displayGuesses(userGuess);
            displayMessage(`Game Over! The number was ${randonNum}`);
            endGame();
        } else {
            displayGuesses(userGuess); 
            checkGuess(userGuess);
    }}
}

function checkGuess(userGuess){
    if(userGuess === randonNum){
        displayMessage(`Congratulations! You guessed the number in ${numOfGuesses} guesses!`);
        endGame();
    } else if(userGuess < randonNum){
        displayMessage("Too low! Try again.");
    } else {
        displayMessage("Too high! Try again.");
    }

}

function displayGuesses(userGuess){
    userInput.value='';
    guesses.innerHTML+=`${userGuess}   `;
    numOfGuesses++
    leftguess.innerHTML=`You have ${11-numOfGuesses} guesses left`;
}

function displayMessage(message){
lowOrHigh.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    para.classList.add("button")
    para.innerHTML='<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(para);
    playGame=false;
    startGame();  
}

function startGame(){
    const newGamebtn=document.getElementById('newGame');
    newGamebtn.addEventListener('click',function(e){
        randonNum=parseInt(Math.random()*100+1);
        preGuesses=[];
        numOfGuesses=1;
        guesses.innerHTML='';
        lowOrHigh.innerHTML='';
        leftguess.innerHTML=`You have ${11-numOfGuesses} guesses left`;
        startOver.removeChild(para);
        userInput.removeAttribute('disabled');
        playGame=true;
    })

}






