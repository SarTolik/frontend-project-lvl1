import readlineSync from 'readline-sync';

const onGameLogic = (gameRule, getGameMech) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  const roundsCount = 3;
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let i = 0; i < roundsCount; i += 1) {
    const [gameTask, correctAnswer] = getGameMech();

    console.log(`Question: ${gameTask}`);

    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default onGameLogic;
