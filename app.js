var outcomeElem = document.getElementById('outcome')

function play(choice) {
    var choices = ['rock', 'paper', 'scissors']
    var compChoice = choices[Math.floor(Math.random() * 3)]

    if (choice == compChoice) {
        return outcomeElem.textContent = "It's a tie!"
    }

    if (compChoice == 'scissors') {
        if (choice == 'rock') {
            return outcomeElem.textContent = "You win!"
        }
        else {
            return outcomeElem.textContent = "You lose!"
        }
    }

    if (compChoice == 'paper') {
        if (choice == 'scissors') {
            return outcomeElem.textContent = "You win!"
        }
        else {
            return outcomeElem.textContent = "You lose!"
        }
    }

    if (compChoice == 'rock') {
        if (choice == 'paper') {
            return outcomeElem.textContent = "You win!"
        }
        else {
            return outcomeElem.textContent = "You lose!"
        }
    }

}