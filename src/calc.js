import readlineSync from 'readline-sync';
import { getRandomNumber } from './cli.js';

export default (userName) => {
  let winCount = 3;

  console.log('What is the result of the expression?');

  while (winCount > 0) {
    const numFirst = getRandomNumber(1, 20);
    const numSecond = getRandomNumber(1, 20);
    const randomOperation = getRandomNumber(0, 2);
    const operation = '+-*'[randomOperation];
    const expression = `${numFirst} ${operation} ${numSecond}`;
    let correctAnswer = 0;

    switch (operation) {
      case '+':
        correctAnswer = numFirst + numSecond;
        break;
      case '-':
        correctAnswer = numFirst - numSecond;
        break;
      case '*':
        correctAnswer = numFirst * numSecond;
        break;
      default:
        break;
    }

    const userAnswer = readlineSync.question(`Question: ${expression}\n`);
    console.log(`Your answer: ${userAnswer}`);

    if (correctAnswer !== Number(userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    winCount -= 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
