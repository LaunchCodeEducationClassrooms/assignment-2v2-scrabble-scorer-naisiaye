// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
let word = '';
const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  word = input.question("Let's play some scrabble! \nEnter a word to score: ");
};

let simpleScore = function(word){
  score = word.length;
  return score;
};

let vowelBonusScore = function(word){
  word = word.toUpperCase()
  let score = 0;
  for (let i=0; i < word.length; i++) {
    if (word[i] === "A" || word[i] === "E" || word[i] === "I" || word[i] === "O" || word[i] === "U") {
      score += 3
    }
    else {
      score++
    }
  }
  return score
};

let scrabbleScore = function(word){
  word = word.toLowerCase();
	let score = 0;
  for (let i = 0; i < word.length; i++) {
    score += newPointStructure[word[i]]
  }
  return score;
};


 const scoringAlgorithms = [{
  name: 'Simple Score',
  description: "Each letter is worth 1 point.",
  scoreFunction: simpleScore
},
{
  name: 'Bonus Vowel',
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoreFunction: vowelBonusScore
},
{
  name: 'Scrabble',
  description: "The traditional scoring algorithm.",
  scoreFunction: scrabbleScore
}
];
function scorerPrompt(){
  let algorithmChoice = input.question(`Which scoring algorithm would you like to use?
  0 - Simple: One point per character
  1 - Vowel Bonus: Vowels are worth 3 points
  2 - Scrabble: Uses scrabble point system
  Enter 0, 1, or 2: `)
   if (algorithmChoice == 0) {
    console.log(`Score for '${word}': ${scoringAlgorithms[0].scoreFunction(word)}`);
  }
  if (algorithmChoice == 1) {
    console.log(`Score for '${word}': ${scoringAlgorithms[1].scoreFunction(word)}`);
  }
  if (algorithmChoice == 2) {
    console.log(`Score for '${word}': ${scoringAlgorithms[2].scoreFunction(word)}`);
  }
}


function transform(obj) {
  let newObj = {}
  for (key in obj) {
    for (let i = 0; i < obj[key].length; i++) {
          let lowerCase = (obj[key][i]).toLowerCase()
          newObj[lowerCase] = Number(key)
    }
  }
  return newObj
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
   
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

