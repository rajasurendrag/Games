let a1 = "01";
let b1 = "02";
let c1 = "03";
let a2 = "04";
let b2 = "05";
let c2 = "06";
let a3 = "07";
let b3 = "08";
let c3 = "09";

function printBoard() {
  console.log("  ┏━━━━━━━━┳━━━━━━━━┳━━━━━━━━┓");
  console.log("  ┃        ┃        ┃        ┃");
  console.log("  ┃   " + a1 + "   " + "┃   " + b1 + "   " + "┃   " + c1 + "   ┃");
  console.log("  ┃        ┃        ┃        ┃");
  console.log("  ┣━━━━━━━━╋━━━━━━━━╋━━━━━━━━┫");
  console.log("  ┃        ┃        ┃        ┃");
  console.log("  ┃   " + a2 + "   " + "┃   " + b2 + "   " + "┃   " + c2 + "   ┃");
  console.log("  ┃        ┃        ┃        ┃");
  console.log("  ┣━━━━━━━━╋━━━━━━━━╋━━━━━━━━┫");
  console.log("  ┃        ┃        ┃        ┃");
  console.log("  ┃   " + a3 + "   " + "┃   " + b3 + "   " + "┃   " + c3 + "   ┃");
  console.log("  ┃        ┃        ┃        ┃");
  console.log("  ┗━━━━━━━━┻━━━━━━━━┻━━━━━━━━┛");
}

function takeUserInput() {
  let userOneInput = '⭕️';
  let userTwoInput = '❌';
  const userOneName = prompt("Enter PlayerOne Name : ");

  if (confirm("Do You Want To Play With This Symbol : ❌")) {
    userOneInput = "❌";
    userTwoInput = '⭕️';
  }

  const userTwoName = prompt("Enter PlayerTwo Name : ");

  return playGame(userOneName, userOneInput, userTwoName, userTwoInput, 0);
}

function playGame(userOneName, userOneInput, userTwoName, userTwoInput, chances) {
  chances++;

  if (validateUserInput(userOneInput, userOneName)) {
    return userOneName + " 👏 Won The Game  👏";
  }

  if (chances === 9) {
    return "Looks Like Its a Tie";
  }

  if (validateUserInput(userTwoInput, userTwoName)) {
    return userTwoName + " 👏 Won The Game  👏";
  }

  return playGame(userOneName, userOneInput, userTwoName, userTwoInput, chances + 1);
}

function validateUserInput(playerInput, playerName) {
  const userBox = +prompt("\n" + playerName + " Enter The Box Number You Wanted to Place Your " + playerInput);

  if (!isUserInputValid(userBox, playerInput)) {
    console.log("😡 Invalid Input");
    validateUserInput(playerInput, playerName);
  }

  console.clear();
  printBoard();

  if (isAnyOneWon(playerInput)) {
    return true;
  }

  return false;
}

function isUserInputValid(box, symbol) {
  switch (box) {
    case 1:
      a1 = symbol;
      return true;
    case 4:
      a2 = symbol;
      return true;
    case 7:
      a3 = symbol;
      return true;
    case 2:
      b1 = symbol
      return true;
    case 5:
      b2 = symbol;
      return true;
    case 8:
      b3 = symbol;
      return true;
    case 3:
      c1 = symbol;
      return true;
    case 6:
      c2 = symbol;
      return true;
    case 9:
      c3 = symbol;
      return true;
  }
  return false;
}

function rollDice() {
  return Math.ceil(Math.random() * 9);
}

function isAnyOneWon(symbol) {
  const validSymbolString = symbol + symbol + symbol;
  if (a1 + b1 + c1 === validSymbolString) {
    return true;
  }

  if (a2 + b2 + c2 === validSymbolString) {
    return true;
  }

  if (a3 + b3 + c3 === validSymbolString) {
    return true;
  }

  if (a1 + b2 + c3 === validSymbolString) {
    return true;
  }

  if (a3 + b2 + c1 === validSymbolString) {
    return true;
  }

  if (a1 + a2 + a3 === validSymbolString) {
    return true;
  }

  if (b1 + b2 + b3 === validSymbolString) {
    return true;
  }

  if (c1 + c2 + c3 === validSymbolString) {
    return true;
  }

  return false;
}

printBoard();

console.log(takeUserInput());
