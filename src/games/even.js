import getRandomNumber from '../common.js';
import gameEngine from '../index.js';

export default () => {
  const welcomeMsg = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameData = () => {
    const question = getRandomNumber(1, 50);
    const isEven = question % 2 === 0;
    const answers = ['no', 'yes'];
    const correctAnswer = isEven ? answers[1] : answers[0];
    return [question, correctAnswer];
  };

  gameEngine(welcomeMsg, gameData);
};
