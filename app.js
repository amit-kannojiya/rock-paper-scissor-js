const userScore = 0;
const compScore = 0;

const choices = document.querySelectorAll(".choice");
const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
const draw = () => {
  console.log("this game is draw");
};
const playGame = (userChoice) => {
  console.log("userchoice :", userChoice);
  const compChoice = genCompChoice();
  console.log("compChoice", compChoice);

  if (userChoice === compChoice) {
    draw();
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
