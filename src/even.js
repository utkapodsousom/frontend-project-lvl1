import readlineSync from 'readline-sync';

const checkIfEven = (userName) => {
  let winCount = 3;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  while (winCount > 0) {
    const randomNum = Math.round(Math.random() * 100);
    const isEven = randomNum % 2 === 0; // true
    const userInput = readlineSync.question(`Question: ${randomNum}\n`);
    const answers = ['no', 'yes'];
    const correctAnswer = isEven ? answers[1] : answers[0];

    console.log(`Your answer: ${userInput}`);

    if (isEven && userInput === answers[1]) {
      console.log('Correct!');
      winCount -= 1;
    } else if (!isEven && userInput === answers[0]) {
      console.log('Correct!');
      winCount -= 1;
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default checkIfEven;