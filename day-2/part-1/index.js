const readline = require('readline');
const fs = require('fs');
const {
  RESULT,
  resultScoreMap,
  selectionScoreMap,
  winCombinationsMap,
  drawCombinationsMap,
} = require('./constants');

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
    const yourSelection = parsedLine[1];

    const yourSelectionScore = selectionScoreMap[yourSelection];

    let resultScore = 0;

    if (winCombinationsMap[yourSelection] === opponentSelection) {
      resultScore = resultScoreMap[RESULT.WIN];
    } else if (drawCombinationsMap[yourSelection] === opponentSelection) {
      resultScore = resultScoreMap[RESULT.DRAW];
    } else {
      resultScore = resultScoreMap[RESULT.LOSS];
    }

    const roundScore = resultScore + yourSelectionScore;

    console.log(`-- ROUND ${index + 1} SCORE --`);
    console.log('Your selection: ', yourSelection);
    console.log('Opponent selection: ', opponentSelection);
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
