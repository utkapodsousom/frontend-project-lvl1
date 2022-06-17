import readlineSync from 'readline-sync';
import getRandomNumber from './common.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default (userName) => {
  let winCount = 0;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (winCount < 3) {
    const givenNumber = getRandomNumber(1, 100);
    const isNumberPrime = isPrime(givenNumber);
    const answers = ['no', 'yes'];
    const correctAnswer = isNumberPrime ? answers[1] : answers[0];
    const userAnswer = readlineSync.question(`Question: ${givenNumber}\n`);
    console.log(`Your answer: ${userAnswer}`);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      winCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
