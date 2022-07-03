import onGameLogic from '../index.js';
import getRandomNumbers from '../randomNumber.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const isGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return isGcd(num2, num1 % num2);
};

const callBrainGcd = () => {
  const num1 = getRandomNumbers();
  const num2 = getRandomNumbers();
  const question = `${num1} ${num2}`;
  const answer = isGcd(num1, num2).toString();
  return [question, answer];
};

const startBrainGcd = () => onGameLogic(gameRule, callBrainGcd);

export default startBrainGcd;
