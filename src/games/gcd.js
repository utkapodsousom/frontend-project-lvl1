import getRandomNumber from '../common.js';
import gameEngine from '../index.js';

export const getGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return getGCD(b, a % b);
};

export default () => {
  const welcomeMsg = 'Find the greatest common divisor of given numbers.';

  const gameData = () => {
    const numFirst = getRandomNumber(1, 50);
    const numSecond = getRandomNumber(1, 50);
    const correctAnswer = getGCD(numFirst, numSecond);
    const question = `${numFirst} ${numSecond}`;

    return [question, correctAnswer.toString()];
  };

  gameEngine(welcomeMsg, gameData);
};
