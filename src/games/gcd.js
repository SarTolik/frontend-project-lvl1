import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const callBrainGcd = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2).toString();
  return [question, answer];
};

const startBrainGcd = () => gameLogic(gameRule, callBrainGcd);

export default startBrainGcd;
