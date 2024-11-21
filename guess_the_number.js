
// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.

function startGame(rangeStart, rangeEnd, maxAttempts) {
  console.log("Welcome to Guess the Number!");
  console.log(`The sceret number is between ${rangeStart} and ${rangeEnd}. You have ${maxAttempts} attempts to find it.`);

  const numberToGuess = getRandomNumber(rangeStart, rangeEnd);

  return userNumberGuess(numberToGuess, maxAttempts, rangeStart, rangeEnd);
}

function userNumberGuess(numberToGuess, maxAttempts, rangeStart, rangeEnd) {
  if (maxAttempts < 1) {
    console.log("🥲 Oh no! You've used all your attempts. Better luck next time! 😢");
    const wantToPlayNewGame = confirm("Do you want to play again");

    return wantToPlayNewGame ? startGame(100, 200, 6) : "Good bye";
  }

  console.log("Take a guess! (Remaining attempts : " + maxAttempts + ")");

  const userNumber = userNumberValidate(rangeStart, rangeEnd, numberToGuess);

  if (isNaN(+userNumber)) {
    return userNumber;
  }

  if (userNumber > numberToGuess) {
    console.log(userNumber + " Too high! Try a higher number.");
  }

  if (userNumber < numberToGuess) {
    console.log(userNumber + " Too low! Try a smaller number.");
  }

  return userNumberGuess(numberToGuess, maxAttempts - 1);
}

function userNumberValidate(rangeStart, rangeEnd, numberToGuess) {
  const number = +prompt('');

  if (number < rangeStart || number > rangeEnd || isNaN(number)) {
    console.log("‼️ Invalid input! Please enter a number. ‼️");

    return userNumberValidate(rangeStart, rangeEnd);
  }

  if (number === numberToGuess) {
    console.log("👏 Bravo! You've nailed it. The number was " + number + "🥳");
    const wantToPlayNewGame = confirm("Do you want to play again");

    return wantToPlayNewGame ? startGame(100, 200, 6) : "🤗 Good bye 🤗";
  }

  return number;
}

function getRandomNumber(start, end) {
  const randomNum = Math.ceil(Math.random() * (end - start));
  return start + randomNum;
}

console.log(startGame(100, 200, 6));
