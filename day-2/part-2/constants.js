const OUTCOMES = { X: 'X', Y: 'Y', Z: 'Z' };
const OPPONENT_SELECTION = { A: 'A', B: 'B', C: 'C' };

const RESULT = { WIN: 'WIN', DRAW: 'DRAW', LOSS: 'LOSS' };
const SELECTION_SCORE = { ROCK: 1, PAPER: 2, SCISSORS: 3 };

const resultScoreMap = { [RESULT.WIN]: 6, [RESULT.DRAW]: 3, [RESULT.LOSS]: 0 };

const winCombinationsMap = {
  [OPPONENT_SELECTION.A]: SELECTION_SCORE.PAPER,
  [OPPONENT_SELECTION.B]: SELECTION_SCORE.SCISSORS,
  [OPPONENT_SELECTION.C]: SELECTION_SCORE.ROCK,
};

const drawCombinationsMap = {
  [OPPONENT_SELECTION.A]: SELECTION_SCORE.ROCK,
  [OPPONENT_SELECTION.B]: SELECTION_SCORE.PAPER,
  [OPPONENT_SELECTION.C]: SELECTION_SCORE.SCISSORS,
};

const lossCombinationsMap = {
  [OPPONENT_SELECTION.A]: SELECTION_SCORE.SCISSORS,
  [OPPONENT_SELECTION.B]: SELECTION_SCORE.ROCK,
  [OPPONENT_SELECTION.C]: SELECTION_SCORE.PAPER,
};

const outcomeResultMap = {
  [OUTCOMES.X]: RESULT.LOSS,
  [OUTCOMES.Y]: RESULT.DRAW,
  [OUTCOMES.Z]: RESULT.WIN,
};

const outcomeScoreMap = {
  [OUTCOMES.X]: resultScoreMap[RESULT.LOSS],
  [OUTCOMES.Y]: resultScoreMap[RESULT.DRAW],
  [OUTCOMES.Z]: resultScoreMap[RESULT.WIN],
};

module.exports = {
  RESULT,
  resultScoreMap,
  winCombinationsMap,
  drawCombinationsMap,
  lossCombinationsMap,
  outcomeResultMap,
  outcomeScoreMap,
};
