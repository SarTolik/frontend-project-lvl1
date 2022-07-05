import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'Answer "yes" if the number is even, other answer "no"';
const isNumberEven = (num) => num % 2 === 0;

const callBrainEven = () => {
  const question = getRandomNumber();
  const answer = isNumberEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startBrainEven = () => gameLogic(gameRule, callBrainEven);

export default startBrainEven;
