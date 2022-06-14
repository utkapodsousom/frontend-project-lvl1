import readlineSync from 'readline-sync';
import { getRandomNumber } from './cli.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
};

export default (userName) => {
  let winCount = 3;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (winCount > 0) {
    const candidate = getRandomNumber(1,100);
    const isNumberPrime = isPrime(candidate);
    const answers = ['no', 'yes'];
    const correctAnswer = isNumberPrime ? answers[1] : answers[0];
    const userAnswer = readlineSync.question(`Question: ${candidate}\n`);
    console.log(`Your answer: ${userAnswer}`);

    if (isNumberPrime && userAnswer === answers[1]) {
      console.log('Correct!');
      winCount -= 1;
    } else if (!isNumberPrime && userAnswer === answers[0]) {
      console.log('Correct!');
      winCount -= 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
