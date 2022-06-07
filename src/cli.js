import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName.trim()}!`);
  return userName;
};

export default greetUser;
