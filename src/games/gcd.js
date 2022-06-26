import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const brainGcd = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  return [question, answer];
};

const startBrainGcd = () => gameLogic(rules, brainGcd);

export default startBrainGcd;
