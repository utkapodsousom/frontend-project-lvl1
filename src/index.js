import readlineSync from 'readline-sync';
import greetUser from './cli.js';

export default (msg, data) => {
  const userName = greetUser();
  let winCount = 0;
  const highestScore = 3;
  console.log(msg);

  while (winCount < highestScore) {
    const gameData = data();
    const question = gameData[0];
    const correctAnswer = gameData[1];
    const userInput = readlineSync.question(`Question: ${question}\n`);
    console.log(`Your answer: ${userInput}`);

    if (userInput !== correctAnswer) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    winCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
