import getRandomNumber from '../common.js';
import gameEngine from '../index.js';

const generateProgression = (start, length, step) => {
  const numbers = [start];
  let nextNum = start;
  for (let i = 0; i <= length; i += 1) {
    nextNum += step;
    numbers.push(nextNum);
  }
  return numbers;
};

const generateStringFromArray = (arr) => {
  let result = '';
  arr.forEach((item) => {
    result += `${item} `;
  });
  return result;
};

export default () => {
  const welcomeMsg = 'What number is missing in the progression?';

  const gameData = () => {
    const newProgression = generateProgression(
      getRandomNumber(0, 20),
      getRandomNumber(8, 12),
      getRandomNumber(2, 4),
    );
    const hiddenPosition = getRandomNumber(2, newProgression.length - 1);
    const correctAnswer = newProgression[hiddenPosition];
    const secretProgression = newProgression;
    secretProgression[hiddenPosition] = '..';
    const secretProgressionString = generateStringFromArray(secretProgression);

    return [secretProgressionString, correctAnswer.toString()];
  };

  gameEngine(welcomeMsg, gameData);
};
