import gameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, other answer "no"';
const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);
const isNumberEven = (num) => num % 2 === 0;

const brainEven = () => {
  const randomNumber = getRandomNumber();
  const rightAnswer = isNumberEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

const startBrainEven = () => gameLogic(rules, brainEven);

export default startBrainEven;
