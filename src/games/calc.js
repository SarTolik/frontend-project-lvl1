import gameLogic from '../index.js';
import getRandomNumber from '../randomNumber.js';

const rules = 'What is the result of the expression?';
const symbols = '+-*';
const expect = (num1, num2, symbol) => {
  if (symbol.toString() === '+') {
    return num1 + num2;
  }
  if (symbol.toString() === '-') {
    return num1 - num2;
  }
  if (symbol.toString() === '*') {
    return num1 * num2;
  }
  return 'Unexpected symbol';
};

const brainCalc = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const symbol = symbols[getRandomNumber(symbols.length)];
  const question = `${num1} ${symbol} ${num2}`;
  const answer = expect(num1, num2, symbol).toString();
  return [question, answer];
};

const startBrainCalc = () => gameLogic(rules, brainCalc);

export default startBrainCalc;
