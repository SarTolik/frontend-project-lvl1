import onGameLogic from '../index.js';
import getRandomNumbers from '../randomNumber.js';

const gameRule = 'What number is missing in the progression?';

const genSeqence = (firstNum, step, massLength) => {
  const mass = [];

  for (let i = 0; i < massLength; i += 1) {
    const result = firstNum + (step * i);
    mass.push(result);
  }
  return mass;
};

const callBrainProgression = () => {
  const length = getRandomNumbers(5, 11);
  const first = getRandomNumbers(1, 11);
  const step = getRandomNumbers(1, 11);
  const progression = genSeqence(first, step, length);
  const randomIndex = getRandomNumbers(0, progression.length);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startBrainProgression = () => onGameLogic(gameRule, callBrainProgression);

export default startBrainProgression;
