import onGameLogic from '../index.js';
import getRandomNumbers from '../randomNumber.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const callBrainPrime = () => {
  const question = getRandomNumbers();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startBrainPrime = () => onGameLogic(gameRule, callBrainPrime);

export default startBrainPrime;
