let randomNumber =parseInt(Math.random()*100+1)

const submit=document.querySelector("#subt")
const userInput=document.querySelector("#guessField")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrhi=document.querySelector(".lowOrhi")
const startOver=document.querySelector(".resultParas")

const p=document.createElement("p")

let prevGuess=[]
let numGuess=1

let playGame=true


if(playGame ){   
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
        
    })
}


function validateGuess (guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess<1){
        alert("Please enter a number greater then 1")
    }else if(guess>100){
        alert("Please enter a number less then 100")
    }else{
       prevGuess.push(guess)
       if(numGuess===11){
displayGuess(guess)
displayMessage(`Game Over. Random Number was ${randomNumber}`)
endGame()
       
}else{displayGuess(guess)
    checkGuess(guess)
   } }
}
function checkGuess(guess){
if(guess===randomNumber){
    displayMessage("Congratulations! You got it right!")
    endGame()
}else if(guess<randomNumber){
    displayMessage("Last guess was too low!")
}else if(guess>randomNumber){
    displayMessage("Last guess was too high!")
}
}
function displayGuess(guess){
userInput.value='';
guessSlot.innerHTML += `${guess} , `
numGuess++
remaining.innerHTML= `<p>${11 - numGuess} guesses left</p>`
}
function displayMessage(message){
    lowOrhi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=''
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<div id="newGame" style="
        background-color: gray;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        margin-top: 15px;
    "><h2>Start New Game</h2></div>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
const newGameButton=document.querySelector("#newGame")
newGameButton.addEventListener("click", function(){
    randomNumber=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11 - numGuess} `
    userInput.removeAttribute("disabled")
    startOver.removeChild(p)
    playGame=true
})
}
