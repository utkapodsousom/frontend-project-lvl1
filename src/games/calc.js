import getRandomNumber from '../common.js';
import gameEngine from '../index.js';

const performRandomOperation = (numA, numB, oper) => {
  switch (oper) {
    case '+':
      return numA + numB;
    case '-':
      return numA - numB;
    case '*':
      return numA * numB;
    default:
      throw new Error(`Invalid operation: ${oper}`);
  }
};

export default () => {
  const welcomeMsg = 'What is the result of the expression?';

  const gameData = () => {
    const numFirst = getRandomNumber(1, 20);
    const numSecond = getRandomNumber(1, 20);
    const randomOperation = getRandomNumber(0, 2);
    const operation = '+-*'[randomOperation];
    const expression = `${numFirst} ${operation} ${numSecond}`;
    const correctAnswer = performRandomOperation(
      numFirst,
      numSecond,
      operation,
    );

    return [expression, correctAnswer.toString()];
  };

  gameEngine(welcomeMsg, gameData);
};
