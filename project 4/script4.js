




const userInput=document.querySelector("#guessField")
const submitButton=document.querySelector("#subt")


const prevGuessesList=document.querySelector(".guessesarr")
const remainingGuesses=document.querySelector(".leftGuesses")


const Hint=document.querySelector(".lowOrHi")

const resultParas=document.querySelector(".resultParas")



var randomNum=parseInt(Math.random()*100+1)

let numberOfGuesses=1
let playGame=true


if(playGame){
    submitButton.addEventListener('click',(e)=>{
      e.preventDefault();
      const userGuess=parseInt(userInput.value)
      verifyNumber(userGuess)
    })

}

function verifyNumber(num){
    if( num<=0  || num>100 || isNaN(num)){
        displayMessage("Please enter a valid number")
    }
    else if(numberOfGuesses > 10){
        displayMessage(`Game Over! The number was ${randomNum}`)
        endGame()
    
    }
    else {
        displayGuesses(num)
        checkGuess(num)
        
    }
}



function displayGuesses(num){
      userInput.value=''
      prevGuessesList.appendChild(document.createTextNode(` ${num}`))
      remainingGuesses.innerHTML=10-numberOfGuesses
      numberOfGuesses++
}

function checkGuess(num){       
      if(num === randomNum){
           displayMessage(`Congratulations You have won the Game`)
           endGame()
        }
        else if(num < randomNum){
            displayMessage(`Your Guess is Too Low, Try another Number`)
            
        }
        else{
            displayMessage(`Your Guess is Too High, Try another Number`)

        }


}

function displayMessage(message){

    Hint.innerHTML=message
}


function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    if (!document.querySelector("#newGame")){
    const para=document.createElement("p")
    para.id = "newGame";
    para.textContent = "Start New Game";
    resultParas.appendChild(para)}
    playGame=false
    startGame()

}

function startGame(){
    const newBtn=document.querySelector("#newGame")
    newBtn.addEventListener('click',(e)=>{
     randomNum=parseInt(Math.random()*100+1)
     userInput.value=''
     prevGuessesList.textContent=''
     remainingGuesses.innerHTML= `Guess Remaining : 10`
     userInput.removeAttribute('disabled')
     numberOfGuesses=1
     playGame=true
     Hint.innerHTML=''


    })
}


