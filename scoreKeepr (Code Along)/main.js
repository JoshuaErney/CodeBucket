const playerOneButton = document.querySelector("#p1Btn");
const playerTwoButton = document.querySelector("#p2Btn");
const playerOnePoints = document.querySelector("#playerOnePoints");
const playerTwoPoints = document.querySelector("#playerTwoPoints");

const resetBtn = document.querySelector("#resetBtn");
const playToSelect = document.querySelector("#playTo");

let playerOneScore = 0;
let playerTwoScore = 0;
let playToScore = "";
let gameFinished = false;

playerOneButton.addEventListener("click", function () {
  if (!gameFinished) {
    playerOneScore += 1;
    playerOnePoints.textContent = playerOneScore;
    if (playerOneScore === playToScore) {
      gameFinished = true;
      playerOnePoints.classList.add("winner");
      playerTwoPoints.classList.add("losser");
    }
  }
});
playerTwoButton.addEventListener("click", function () {
  if (!gameFinished) {
    playerTwoScore += 1;
    playerTwoPoints.textContent = playerTwoScore;
    if (playerTwoScore === playToScore) {
      gameFinished = true;
      playerTwoPoints.classList.add("winner");
      playerOnePoints.classList.add("losser");
    }
  }
});

playToSelect.addEventListener("change", function () {
  playToScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
  gameFinished = false;
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOnePoints.textContent = 0;
  playerTwoPoints.textContent = 0;
  playerOnePoints.classList.remove("winner", "losser");
  playerTwoPoints.classList.remove("winner", "losser");
}
