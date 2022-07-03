import onGameLogic from '../index.js';
import getRandomNumbers from '../randomNumber.js';

const gameRule = 'Answer "yes" if the number is even, other answer "no"';
const isNumberEven = (num) => num % 2 === 0;

const callBrainEven = () => {
  const question = getRandomNumbers();
  const answer = isNumberEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startBrainEven = () => onGameLogic(gameRule, callBrainEven);

export default startBrainEven;
