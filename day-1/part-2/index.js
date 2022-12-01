const readline = require('readline');
const fs = require('fs');
const MaxHeap = require('./MaxHeap');

const INPUT_FILE = 'input.txt';
const TOP_ELVES_TO_EXTRACT = 3;

const readInterface = readline.createInterface({
  input: fs.createReadStream(INPUT_FILE),
  console: false,
});

let currentElfIndex = 0;
let currentElfTotalCalories = 0;

const elfCaloriesMaxHeap = new MaxHeap();

const processElfCalories = () => {
  console.log(`-- FINISHED PROCESSING ELF ${currentElfIndex + 1} --`);
  console.log(
    `Total calories for Elf ${currentElfIndex + 1} were: `,
    currentElfTotalCalories
  );

  elfCaloriesMaxHeap.add(currentElfTotalCalories);
  currentElfTotalCalories = 0;
  currentElfIndex++;
};

const calculateTopHungriestElves = () => {
  console.log(
    `\n-- THE TOP ${TOP_ELVES_TO_EXTRACT} HUNGRIEST ELVES CALORIES ARE --`
  );

  let totalCalories = 0;
  for (let i = 0; i < TOP_ELVES_TO_EXTRACT; i++) {
    const calories = elfCaloriesMaxHeap.extractMax();
    totalCalories += calories;
    console.log(`${i + 1}`, calories);
  }

  console.log(
    `\n-- THE TOTAL AMOUNT OF CALORIES FOR THE ${TOP_ELVES_TO_EXTRACT} HUNGRIEST ELVES IS --`
  );
  console.log(totalCalories);
};

readInterface
  .on('line', (line) => {
    if (line === '') processElfCalories();
    else {
      currentElfTotalCalories += parseInt(line, 10);
    }
  })
  .on('close', () => {
    calculateTopHungriestElves();
  });
