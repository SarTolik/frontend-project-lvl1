import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const gameRule = 'What is the result of the expression?';
const symbols = '+-*';
const calculate = (num1, num2, symbol) => {
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
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const symbol = symbols[getRandomNumber(0, symbols.length)];
  const question = `${num1} ${symbol} ${num2}`;
  const answer = calculate(num1, num2, symbol).toString();
  return [question, answer];
};

const startBrainCalc = () => gameLogic(gameRule, callBrainCalc);

export default startBrainCalc;
