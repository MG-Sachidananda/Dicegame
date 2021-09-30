// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true


// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const flipCoinBtn = document.getElementById("flipCoinBtn");
const doubleBtn = document.getElementById("doubleBtn");

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
    doubleBtn.style.display = "none"
}

function coinFlip(){
    const startingNumber = Math.floor(Math.random() * 2 + 1)
    if (startingNumber === 1) {
        message.textContent = "Player 1 starts!"
    } else {
        player1Turn = false
        message.textContent = "Player 2 starts!"
    }
}

/* Hook up a click event listener to the Roll Dice Button. */
flipCoinBtn.addEventListener("click", function(){
    coinFlip()
    rollBtn.style.display = "block"
    flipCoinBtn.style.display = "none"
})

 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    rollBtnPlay(randomNumber)
})

doubleBtn.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    const randomChance = Math.floor(Math.random() * 2) + 1
    if (randomChance == 1) {
        rollBtnPlay(randomNumber * 2)
    } else {
        randomNumber = 0
        rollBtnPlay(randomNumber)
    }
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function rollBtnPlay(number){
    doubleBtn.style.display = "block"
    if (player1Turn) {
        player1Score += number
        player1Scoreboard.textContent = player1Score
        player2Dice.textContent = "-"
        player1Dice.textContent = number
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += number
        player2Scoreboard.textContent = player2Score
         player1Dice.textContent = "-"
        player2Dice.textContent = number
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
}

function reset() {
    player1Score = 0
    player2Score = 0
    coinFlip()
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Who starts?"
    resetBtn.style.display = "none"
    flipCoinBtn.style.display = "block"
    doubleBtn.style.display = "none"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}


