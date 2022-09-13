import readlineSync from 'readline-sync';
import greetUser from './cli.js';

export default (gameDescription, gameData) => {
  const userName = greetUser();
  const highestScore = 3;
  console.log(gameDescription);

  for (let winCount = 0; winCount < highestScore; winCount += 1) {
    const [question, correctAnswer] = gameData();
    const userInput = readlineSync.question(`Question: ${question}\n`);
    console.log(`Your answer: ${userInput}`);
    if (userInput !== correctAnswer) {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
