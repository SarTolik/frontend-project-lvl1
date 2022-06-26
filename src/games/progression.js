import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const rules = 'What number is missing in the progression?';

const sequence = () => {
  const massLength = 5 + getRandomNumber(5);
  const firstNum = 1 + getRandomNumber(9);
  const step = 1 + getRandomNumber(9);
  const mass = [];

  for (let i = 0; i < massLength; i += 1) {
    const result = firstNum + (step * i);
    mass.push(result);
  }
  return mass;
};

const brainProgression = () => {
  const progression = sequence();
  const randomIndex = getRandomNumber(progression.length - 1);
  const answer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startBrainProgression = () => gameLogic(rules, brainProgression);

export default startBrainProgression;
