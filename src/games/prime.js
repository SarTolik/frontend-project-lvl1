import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const brainPrime = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const startBrainPrime = () => gameLogic(rules, brainPrime);

export default startBrainPrime;
