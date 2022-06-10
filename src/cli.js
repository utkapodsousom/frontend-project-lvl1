import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?\n') || 'user';
  console.log(`Hello, ${userName.trim()}!`);
  return userName;
};

export const gcd = (a, b) => {
  if (b > a) {
    let temp = a; 
    a = b; 
    b = temp;
  }
  while (true) {
      if (b == 0) return a;
      a %= b;
      if (a == 0) return b;
      b %= a;
  }
}

export const getRandomNumber = (max) => Math.round(Math.random() * max);
