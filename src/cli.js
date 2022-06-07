import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?\n') || 'user';
  console.log(`Hello, ${userName.trim()}!`);
  return userName;
};

export const getRandomNumber = (max) => Math.round(Math.random() * max);
