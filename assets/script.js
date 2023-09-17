var time = 0;
var score = 0;
var questionCount = 0;

function init(){

    // Removes Answers and Result
    document.getElementById("answers").style.display = "none";
    document.getElementById("result").style.display = "none";

    // Displays Start Button
    document.getElementById("start-container").style.display = "block"
    var startButton = document.getElementById("start-btn");
    startButton.addEventListener("click", startGame);

    // Hides End Container
    document.getElementById("end-container").style.display = "none";
}

document.getElementById("timer").textContent = time;

function timer(){
    time = 50;
    var timeCountdown = setInterval(function(){
        time--;
        document.getElementById("timer").textContent = time;
        if(time <=0) {
            clearInterval(timeCountdown);
            endGame();
        }
    },1000);
};

function startGame(){
    // Start Button is Clicked
    // Timer Starts
    timer();

    // Removes Start Button
    document.getElementById("start-container").style.display = "none"
    // Displays Question

    displayQnA();
    // Display Answers
    document.getElementById("answers").style.display = "block";
};

function displayQnA(){

    if(questionCount === questions.length){
        endGame();
    } else {

        document.getElementById("question").textContent = questions[questionCount].question;

        // Potentially remove event listeners for each answer

        var answer1 = document.getElementById("answer1");
        answer1.textContent = questions[questionCount].answersArr[0];

        var answer2 = document.getElementById("answer2");
        answer2.textContent = questions[questionCount].answersArr[1];

        var answer3 = document.getElementById("answer3");
        answer3.textContent = questions[questionCount].answersArr[2];

        var answer4 = document.getElementById("answer4");
        answer4.textContent = questions[questionCount].answersArr[3];

        console.log(questionCount);

        var correctAnswer = questions[questionCount].correct;

        answer1.addEventListener('click', function() {checkAnswer(answer1, correctAnswer)});
        answer2.addEventListener('click', function() {checkAnswer(answer2, correctAnswer)});
        answer3.addEventListener('click', function() {checkAnswer(answer3, correctAnswer)});
        answer4.addEventListener('click', function() {checkAnswer(answer4, correctAnswer)});
        questionCount++;
    }  
};

// Function that reduces time when wrong answer is selected
function checkAnswer(element, correctAnswer){
    if (element.id != correctAnswer){
        time = time - 5;
    };
    displayQnA();
};

function endGame(){
    score = time;
    document.getElementById("question").style.display = "none";
    document.getElementById("answers").style.display = "none";
    document.getElementById("result").style.display = "none";

    document.getElementById("end-text").textContent = "Your final score is " + score;
    document.getElementById("end-container").style.display = "block";
};

function saveScore(){
};

// Question Array
var questions = [
    {
        question: "Where should the script tag be placed in an HTML document?",
        answersArr: ["1", "2", "3", "4"],
        correct: "answer1"
    },
    {
        question: "Which alert type needs a text input?",
        answersArr: ["1", "2", "3", "4"],
        correct: "answer2"
    },
    {
        question: "Which of the following will create a function in JavaScript?",
        answersArr: ["1", "2", "3", "4"],
        correct: "answer3"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answersArr: ["1", "2", "3", "4"],
        correct: "answer4"
    }, {
        question: "A variable declared and used inside of a function has what scope?",
        answersArr: ["1", "2", "3", "4"],
        correct: "answer1"
    }
];


// Page Loads
// Displays View Highscores, Timer, Title, and Start Button
// Start Button clicked, timer starts, first question and answers appear
// Player chooses answer
// Display correct or incorrect
// If answer is correct, next question appears
// If answer is incorrect, time decreases, next question appears
// Game ends when all questions are answered or timer reaches 0
// Player enters initials and score is saved
// Highscores page appears with list of scores

init();
// timer();

// Potentially fix answerCheck
// Potentially pass target