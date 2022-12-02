const {
  RESULT,
  winCombinationsMap,
  drawCombinationsMap,
  lossCombinationsMap,
  outcomeScoreMap,
  outcomeResultMap,
} = require('./constants');

const calculateDesiredResultScore = (desiredOutcome) =>
  outcomeScoreMap[desiredOutcome];

const calculateDesiredSelectionScore = (opponentSelection, desiredOutcome) => {
  const desiredResult = outcomeResultMap[desiredOutcome];

  let selectionScore = 0;

  if (desiredResult === RESULT.WIN) {
    selectionScore = winCombinationsMap[opponentSelection];
  } else if (desiredResult === RESULT.DRAW) {
    selectionScore = drawCombinationsMap[opponentSelection];
  } else {
    selectionScore = lossCombinationsMap[opponentSelection];
  }

  return selectionScore;
};

module.exports = {
  calculateDesiredResultScore,
  calculateDesiredSelectionScore,
};
