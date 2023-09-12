var time = 0;
var score = 0;
var wins = 0;
var losses = 0;

document.getElementById("timer").textContent = time;

function timer(){
    time = 100;
    if (time > 0){
        time--;  
    };  
};

// Make a timer that counts down using setInterval
var timerInterval = setInterval(timer, 1000); 

function startGame(){
};

function endGame(){
};

function saveScore(){
};

// Question Array
var questions = [
    "What is the correct syntax for referring to an external script called 'xxx.js'?",
    "Which alert needs a text input?",
    "How do you create a function in JavaScript?",
    "How do you call a function named 'myFunction'?",
    "How do you write an IF statement in JavaScript?",
];

// Function that reduces time when wrong answer is selected
function wrongAnswer(){
    time = time - 10;
};

// Function that increases score when correct answer is selected
function correctAnswer(){
    score++;
};

// Page Loads
// Displays View Highscores, Timer, and Start Button (init function?)
// Start Button clicked, timer starts, first question appears
// Player chooses answer
// Display correct or incorrect
// If answer is correct, score increases, next question appears
// If answer is incorrect, time decreases, next question appears
// Game ends when all questions are answered or timer reaches 0
// Player enters initials and score is saved
// Highscores page appears with list of scores