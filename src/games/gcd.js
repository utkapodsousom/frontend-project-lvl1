import getRandomNumber from '../common.js';
import gameEngine from '../index.js';

export const gcd = (a, b) => {
  let paramA = a;
  let paramB = b;
  if (paramB > paramA) {
    const tempA = paramA;
    paramA = paramB;
    paramB = tempA;
  }
  for (;;) {
    if (paramB === 0) return paramA;
    paramA %= paramB;
    if (paramA === 0) return paramB;
    paramB %= paramA;
  }
};

export default () => {
  const welcomeMsg = 'Find the greatest common divisor of given numbers.';

  const gameData = () => {
    const numFirst = getRandomNumber(1, 50);
    const numSecond = getRandomNumber(1, 50);
    const correctAnswer = gcd(numFirst, numSecond);
    const question = `${numFirst} ${numSecond}`;

    return [question, correctAnswer.toString()];
  };

  gameEngine(welcomeMsg, gameData);
};
