import readlineSync from 'readline-sync';
import getRandomNumber from './common.js';

const performRandomOperation = (oper, numA, numB) => {
  let correctAnswer = 0;
  switch (oper) {
    case '+':
      correctAnswer = numA + numB;
      break;
    case '-':
      correctAnswer = numA - numB;
      break;
    case '*':
      correctAnswer = numA * numB;
      break;
    default:
      throw new Error(`Invalid operation: ${oper}`);
  }
  return correctAnswer;
};

export default (userName) => {
  let winCount = 0;

  console.log('What is the result of the expression?');

  while (winCount < 3) {
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

    const userAnswer = readlineSync.question(`Question: ${expression}\n`);
    console.log(`Your answer: ${userAnswer}`);

    if (correctAnswer !== Number(userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    winCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
