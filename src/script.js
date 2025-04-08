let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.ceil(Math.random() * 10);
};
const compareGuesses = (human, computer, number) => {
  let diffHuman = Math.abs(human - number);
  let diffComputer = Math.abs(computer - number);
  return diffHuman - diffComputer >= 0 ? false : true;
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
console.log(generateTarget());
