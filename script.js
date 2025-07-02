let button = document.getElementById("rollDice");

button.addEventListener("click", rollDice);

function getRandomInt(max) {
  return Math.floor(max * Math.random());
}

function rollDice() {
  let randomNumber = getRandomInt(6) + 1;
  let randomNumber2 = getRandomInt(6) + 1;
  let diceImage = document.getElementById("dice");
  let diceImage2 = document.getElementById("dice2");
  if (randomNumber % 2 == 0) {
    diceImage.src = `Dice-${randomNumber}.svg`;
    diceImage2.src = `Dice-${randomNumber2}.svg`;
  } else {
    diceImage.src = `Dice-${randomNumber}.svg.png`;
    diceImage2.src = `Dice-${randomNumber2}.svg.png`;
  }
  whoWon(randomNumber, randomNumber2);
}

function whoWon(randomNumber, randomNumber2) {
  if (randomNumber > randomNumber2) {
    alert("Congrats, you won!");
  } else if (randomNumber == randomNumber2) {
    alert("It's tie!");
  } else {
    alert("You lost!");
  }
}
