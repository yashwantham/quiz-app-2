var readlineSync = require("readline-sync");

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " PLAY AND CHECK YOUR GENERAL KNOWLEDGE");
}

var questionList = [
  {
    question: "Who's Indian cricket team captain?",
    answer: "Rohit Sharma"
  },
  {
    question: "Which city is called as the silicon valley of India?",
    answer: "Bangalore"
  },
  {
    question: "Who is the only captain to win all 3 ICC trophies?",
    answer: "MS Dhoni"
  },
  {
    question: "Who's called as the King of Football?",
    answer: "Pele"
  },
  {
    question: "Who won the recent FIFA WC (2022)?",
    answer: "Argentina"
  }
]

var highScores = [
  {
    name: "Rohit",
    hisScore: 5
  },
  {
    name: "Shub",
    hisScore: 4
  }
]
var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("Right :)");
    score++;
  }
  else {
    console.log("Wrong :(");
  }
}

function startQuiz() {
  for (var i = 0; i < questionList.length; i++) {
    var questionCur = questionList[i];
    play(questionCur.question, questionCur.answer);
  }
}

function showScore() {
  console.log(" YAY! Your score is: " + score);
  console.log("Checkout the highest scores");
  for (var i = 0; i < highScores.length; i++) {
    var cur = highScores[i];
    console.log(cur.name + " --> " + cur.hisScore);
  }
}

welcome();
startQuiz();
showScore();
