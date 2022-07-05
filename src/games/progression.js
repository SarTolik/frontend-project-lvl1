import onGameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

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
  const length = getRandomNumber(5, 11);
  const first = getRandomNumber(1, 11);
  const step = getRandomNumber(1, 11);
  const progression = genSeqence(first, step, length);
  const randomIndex = getRandomNumber(0, progression.length);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startBrainProgression = () => onGameLogic(gameRule, callBrainProgression);

export default startBrainProgression;
