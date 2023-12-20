const userScore = 0;
const compScore = 0;

const choices = document.querySelectorAll(".choice");
const genCompChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let selectedChoice = Math.floor(Math.random() * 3);
};

const playGame = (userChoice) => {
  console.log("userchoice :", userChoice);
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
