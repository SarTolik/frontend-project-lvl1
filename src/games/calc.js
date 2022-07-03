import onGameLogic from '../index.js';
import getRandomNumbers from '../randomNumber.js';

const gameRule = 'What is the result of the expression?';
const symbols = '+-*';
const getCorrectSymbol = (num1, num2, symbol) => {
  if (symbol === '+') {
    return num1 + num2;
  }
  if (symbol === '-') {
    return num1 - num2;
  }
  if (symbol === '*') {
    return num1 * num2;
  }
  return 'Unexpected symbol';
};

const callBrainCalc = () => {
  const num1 = getRandomNumbers();
  const num2 = getRandomNumbers();
  const symbol = symbols[getRandomNumbers(0, symbols.length)];
  const question = `${num1} ${symbol} ${num2}`;
  const answer = getCorrectSymbol(num1, num2, symbol).toString();
  return [question, answer];
};

const startBrainCalc = () => onGameLogic(gameRule, callBrainCalc);

export default startBrainCalc;
