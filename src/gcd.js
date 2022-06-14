import readlineSync from 'readline-sync';
import { getRandomNumber, gcd } from './cli.js';

export default (userName) => {
  let winCount = 3;
  console.log('Find the greatest common divisor of given numbers.');

  while (winCount > 0) {
    const numFirst = getRandomNumber(1, 50);
    const numSecond = getRandomNumber(1, 50);
    const correctAnswer = gcd(numFirst, numSecond);

    const userAnswer = readlineSync.question(`Question: ${numFirst} ${numSecond}\n`);
    console.log(`Your answer: ${userAnswer}`);

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    winCount -= 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
