import getRandomNumber from '../common.js';
import gameEngine from '../index.js';

const performRandomOperation = (oper, numA, numB) => {
  let result = 0;
  switch (oper) {
    case '+':
      result = numA + numB;
      break;
    case '-':
      result = numA - numB;
      break;
    case '*':
      result = numA * numB;
      break;
    default:
      throw new Error(`Invalid operation: ${oper}`);
  }
  return result;
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
      operation,
      numFirst,
      numSecond,
    );

    return [expression, correctAnswer.toString()];
  };

  gameEngine(welcomeMsg, gameData);
};
