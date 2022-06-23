import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const rules = 'Answer "yes" if the number is even, other answer "no"';
const isNumberEven = (num) => num % 2 === 0;

const brainEven = () => {
  const randomNumber = getRandomNumber();
  const rightAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

const startBrainEven = () => gameLogic(rules, brainEven);

export default startBrainEven;
