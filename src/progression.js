import readlineSync from 'readline-sync';
import getRandomNumber from './common.js';

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

export default (userName) => {
  let winCount = 0;

  console.log('What number is missing in the progression?');

  while (winCount < 3) {
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
    const userAnswer = readlineSync.question(`Question: ${secretProgressionString}\n`);
    console.log(`Your answer: ${userAnswer}`);

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    winCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
