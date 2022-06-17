/* eslint-disable no-constant-condition */
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?\n') || 'player';
  console.log(`Hello, ${userName.trim()}!`);
  return userName;
};
