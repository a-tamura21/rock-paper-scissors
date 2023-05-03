const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }

  if (randomNumber === 2) {
    computerChoice = "paper";
  }

  if  (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (userChoice === computerChoice) {
      result = "tie";
    } else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        result = "win";
      } else {
        result = "lose";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "rock") {
        result = "win";
      } else {
        result = "lose";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        result = "win";
      } else {
        result = "lose";
      }
    }
    resultDisplay.innerHTML = result;
}