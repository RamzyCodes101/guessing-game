//create a variable for randomNumber and assign it to generate random numbers
let randomNumber =  Math.floor(Math.random() * 100) + 1

//create a permanent guess, lastResult and loworhi variable and assign them to html 
// query thats the class .guess, .last.. and .loworhi
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")


const guessSubmit = document.querySelector("guessSubmit")
const guessField = document.querySelector("guessField")

//set the guesscount to one cause its start from 1 to ... 100
let guessCount = 1
let ResetButton

function checkGuess (){
    const userGuess = Number(guessField.value)
    if(guessCount === 0) {
        guesses.textContent = "Previous guesses:"
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`
}

if(userGuess === randomNumber){
    lastResult.textContent = "Congratulation! You got it right"
    lastResult.style.backgroundColor = "green"
    lowOrHi.textContent = ""
    setGameOver()
} else if (guessCount === 10) {
    lastResult.textContent = "GAMEOVERRRR!!"
    lowOrHi.textContent = ""
    setGameOver()
} else {
    lastResult.textContent = "Wrongg!"
    lastResult.style.backgroundColor = "red"
    if(userGuess < randomNumber){
        lowOrHi.textContent = "the number is too low"
    } else if(userGuess > randomNumber){
        lowOrHi.textContent = "the number was too high"
    }
}