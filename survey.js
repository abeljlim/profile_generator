const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  `What's your name? Nicknames are also acceptable :) `,
  `What's an activity you like doing? `,
  `What do you listen to while doing that? `,
  `Which meal is your favourite (eg: dinner, brunch, etc.) `,
  `What's your favourite thing to eat for that meal? `,
  `Which sport is your absolute favourite? `,
  `What is your superpower? In a few words, tell us what you are amazing at! `
];
const answers = new Array(questions.length);
let currQuestion = 0;

// mutual recursion to keep my code clean
const askQuestion = (questionNum, questions, answers) => {

  // base case: return code for profile
  if (questionNum >= questions.length) {
    console.log(`${answers[0]} likes to listen to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
    rl.close();
    return;
  }

  // recursive case
  rl.question(questions[questionNum], (answer) => {
    answers[questionNum] = answer;

    // ask next question
    askQuestion(questionNum + 1, questions, answers);
  });
}

askQuestion(0, questions, answers);