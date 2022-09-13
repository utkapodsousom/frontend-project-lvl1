import getRandomNumber from '../common.js';
import gameEngine from '../index.js';

const generateProgression = (start, length, step) => {
  const progression = [start];
  let nextNum = start;
  for (let i = 0; i <= length; i += 1) {
    nextNum += step;
    progression.push(nextNum);
  }
  return progression;
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
    newProgression[hiddenPosition] = '..';
    const secretProgressionString = newProgression.join(' ');

    return [secretProgressionString, correctAnswer.toString()];
  };

  gameEngine(welcomeMsg, gameData);
};
