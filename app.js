let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
const draw = () => {
  msg.innerText = "this game is draw";
};
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = "you won!";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose");
    msg.innerText = "you lose, try again";
  }
};

const playGame = (userChoice) => {
  console.log("userchoice :", userChoice);
  const compChoice = genCompChoice();
  console.log("compChoice", compChoice);

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? true : false;
    } else {
      compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
