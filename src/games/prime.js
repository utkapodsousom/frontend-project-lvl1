import getRandomNumber from '../common.js';
import gameEngine from '../index.js';

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

export default () => {
  const welcomeMsg = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameData = () => {
    const givenNumber = getRandomNumber(1, 100);
    const isNumberPrime = isPrime(givenNumber);
    const answers = ['no', 'yes'];
    const correctAnswer = isNumberPrime ? answers[1] : answers[0];

    return [givenNumber, correctAnswer];
  };

  gameEngine(welcomeMsg, gameData);
};
