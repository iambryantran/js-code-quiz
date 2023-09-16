var time = 0;
var score = 0;

function init(){

    // Removes Answers and Result
    $("#answers").remove();
    // document.getElementById("result").style.display = "none";

    // Displays Start Button
}

document.getElementById("timer").textContent = time;

function timer(){
    time = 50;
    var timeCountdown = setInterval(function(){
        time--;
        document.getElementById("timer").textContent = time;
        if(time <=0) {
            clearInterval(timeCountdown);
        }
    },1000);
};

// Timer 
var timerInterval = setInterval(timer, 1000); 

function startGame(){
    // Start Button is Clicked
    // Removes Start Button
    // Displays Question
    // Brings back Answers
};

function endGame(){
    score = time;
};

function saveScore(){
};

// Question Array
var questions = [
    {
        question: "Where should the script tag ba placed in an HTML document?",
        answersArr: ["", "", ""],
        correct: "answer1"
    },
    "Which alert type needs a text input?",
    "Which of the following will create a function in JavaScript?",
    "How do you call a function named 'myFunction'?",
    "A variable declared and used inside of a function has what scope?",
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
// Displays View Highscores, Timer, and Start Button
// Start Button clicked, timer starts, first question appears
// Player chooses answer
// Display correct or incorrect
// If answer is correct, next question appears
// If answer is incorrect, time decreases, next question appears
// Game ends when all questions are answered or timer reaches 0
// Player enters initials and score is saved
// Highscores page appears with list of scores

// init();
timer();