/* eslint-disable no-constant-condition */
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?\n') || 'user';
  console.log(`Hello, ${userName.trim()}!`);
  return userName;
};

export const gcd = (a, b) => {
  let paramA = a;
  let paramB = b;
  if (paramB > paramA) {
    const tempA = paramA;
    paramA = paramB;
    paramB = tempA;
  }
  while (true) {
    if (paramB === 0) return paramA;
    paramA %= paramB;
    if (paramA === 0) return paramB;
    paramB %= paramA;
  }
};

export const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min + 1));
