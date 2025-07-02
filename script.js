let button = document.getElementById("rollDice");

button.addEventListener("click", rollDice);

function getRandomInt(max) {
  return Math.floor(max * Math.random());
}

function rollDice() {
  let randomNumber = getRandomInt(6) + 1;
  let diceImage = document.getElementById("dice");
  if (randomNumber % 2 == 0) {
    diceImage.src = `Dice-${randomNumber}.svg`;
  } else {
    diceImage.src = `Dice-${randomNumber}.svg.png`;
  }
}
