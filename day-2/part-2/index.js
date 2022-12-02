const readline = require('readline');
const fs = require('fs');

const {
  calculateDesiredSelectionScore,
  calculateDesiredResultScore,
} = require('./helpers');

const INPUT_FILE = 'input.txt';

const readInterface = readline.createInterface({
  input: fs.createReadStream(INPUT_FILE),
  console: false,
});

let totalScore = 0;
let index = 0;

readInterface
  .on('line', (line) => {
    parsedLine = line.split(' ');
    const opponentSelection = parsedLine[0];
    const desiredOutcome = parsedLine[1];

    const yourSelectionScore = calculateDesiredSelectionScore(
      opponentSelection,
      desiredOutcome
    );

    const resultScore = calculateDesiredResultScore(desiredOutcome);

    const roundScore = resultScore + yourSelectionScore;

    console.log(`-- ROUND ${index + 1} SCORE --`);
    console.log('Your selection score: ', yourSelectionScore);
    console.log('Result score: ', resultScore);
    console.log('Round score: ', roundScore);

    totalScore += roundScore;
    index++;
  })
  .on('close', () => {
    console.log(`\n-- TOTAL SCORE --`);
    console.log('Total Score: ', totalScore);
  });
