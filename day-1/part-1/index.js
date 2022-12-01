const readline = require('readline');
const fs = require('fs');

const INPUT_FILE = 'input.txt';

const readInterface = readline.createInterface({
  input: fs.createReadStream(INPUT_FILE),
  console: false,
});

let currentElfIndex = 0;
let currentElfTotalCalories = 0;

let hungriestElfTotalCalories = 0;
let hungriestElfIndex = 0;

const processElfCalories = () => {
  console.log(`-- FINISHED PROCESSING ELF ${currentElfIndex + 1} --`);
  console.log(
    `Total calories for Elf ${currentElfIndex + 1} were: `,
    currentElfTotalCalories
  );

  if (currentElfTotalCalories > hungriestElfTotalCalories) {
    hungriestElfTotalCalories = currentElfTotalCalories;
    hungriestElfIndex = currentElfIndex;
  }

  currentElfTotalCalories = 0;
  currentElfIndex++;
};

readInterface
  .on('line', (line) => {
    if (line === '') processElfCalories();
    else {
      currentElfTotalCalories += parseInt(line, 10);
    }
  })
  .on('close', () => {
    console.log(`\n-- THE HUNGRIEST ELF IS --`);
    console.log(
      `Elf ${hungriestElfIndex + 1}:`,
      'They are carrying total calories',
      hungriestElfTotalCalories
    );
  });
