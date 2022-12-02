const YOUR_SELECTION = { X: 'X', Y: 'Y', Z: 'Z' };
const OPPONENT_SELECTION = { A: 'A', B: 'B', C: 'C' };

const RESULT = { WIN: 'WIN', DRAW: 'DRAW', LOSS: 'LOSS' };

const resultScoreMap = { [RESULT.WIN]: 6, [RESULT.DRAW]: 3, [RESULT.LOSS]: 0 };

const selectionScoreMap = {
  [YOUR_SELECTION.X]: 1,
  [YOUR_SELECTION.Y]: 2,
  [YOUR_SELECTION.Z]: 3,
};

const winCombinationsMap = {
  [YOUR_SELECTION.X]: OPPONENT_SELECTION.C,
  [YOUR_SELECTION.Y]: OPPONENT_SELECTION.A,
  [YOUR_SELECTION.Z]: OPPONENT_SELECTION.B,
};

const drawCombinationsMap = {
  [YOUR_SELECTION.X]: OPPONENT_SELECTION.A,
  [YOUR_SELECTION.Y]: OPPONENT_SELECTION.B,
  [YOUR_SELECTION.Z]: OPPONENT_SELECTION.C,
};

module.exports = {
  RESULT,
  resultScoreMap,
  selectionScoreMap,
  winCombinationsMap,
  drawCombinationsMap,
};
