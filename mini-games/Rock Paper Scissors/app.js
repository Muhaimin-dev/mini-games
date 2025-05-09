let userScore = 0;
let compSccore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "dodgerblue"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        console.log("you loss!");
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}` 
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if(userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true
    } else if (userChoice === "paper") {
        userWin = compChoice === "scissors" ? false : true
    } else {
        compChoice === "rock" ? false : true 
    }
    showWinner(userWin, userChoice, compChoice)
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
