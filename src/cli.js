import readlineSync from 'readline-sync';

const greetUser = () => {
  const userName = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${userName.trim()}!`);
  return true;
};

export default greetUser;
