var time = 0;
var score = 0;
var questionCount = 0;
var submitBtn = document.getElementById("submit-button");
var scoreBtn = document.getElementById("scoresBtn");
var highscoreList = document.getElementById("score-list");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var timeCountdown;

document.getElementById("timer").textContent = time;

function init(){

    // Removes Answers and Result
    document.getElementById("answers").style.display = "none";
    document.getElementById("result").style.display = "none";

    // Displays Start Button and Adds Event Listener
    var startButton = document.getElementById("start-btn");
    document.getElementById("start-container").style.display = "block"
    startButton.addEventListener("click", startGame);

    // Hides End Container and Submit
    document.getElementById("end-container").style.display = "none";
    document.getElementById("score-div").style.display = "none";
    highscoreList.style.display = "none";
}

// Timer Function

function timer(){
    time = 50;
    timeCountdown = setInterval(function(){
        time--;
        document.getElementById("timer").textContent = time;
        if(time <=0) {
            endGame();
        }
    }, 1000);
};

function startGame(){

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

        answer1.textContent = questions[questionCount].answersArr[0];

        answer2.textContent = questions[questionCount].answersArr[1];

        answer3.textContent = questions[questionCount].answersArr[2];

        answer4.textContent = questions[questionCount].answersArr[3];

    }
};

answer1.addEventListener('click', checkAnswer);
answer2.addEventListener('click', checkAnswer);
answer3.addEventListener('click', checkAnswer);
answer4.addEventListener('click', checkAnswer);


// Function that reduces time when wrong answer is selected and 
function checkAnswer(event){
    if (event.target.id != questions[questionCount].correct){
        time = time - 5;
    };
    questionCount++;
    displayQnA();
};

// End Game needs to remove question, answers, and results.  Should display the end container and update score.

function endGame(){
    clearInterval(timeCountdown);
    score = time;
    document.getElementById("question").style.display = "none";
    document.getElementById("answers").style.display = "none";
    document.getElementById("result").style.display = "none";

    document.getElementById("score-div").style.display = "block";
    document.getElementById("end-container").style.display = "block";
    document.getElementById("end-text").textContent = "Your final score is " + score;
};

// Saves score to local storage

function saveScore(){
    score = time;

    // ScoreArr checks local storage for a key of newScores, if no newScores, default to empty array
    var scoreArr = JSON.parse(localStorage.getItem("newScores")) || [];
    var initials = document.getElementById("initials");
    var newScore = {
        name: initials.value,
        userScore: score,
    }
    // Push newScore into the Score Array
    scoreArr.push(newScore);
    localStorage.setItem("newScores", JSON.stringify(scoreArr));
    submitBtn.style.display = "none";
};

submitBtn.onclick = saveScore;

function displayScores(){
    var scoreArr = JSON.parse(localStorage.getItem("newScores")) || [];
    highscoreList.style.display = "block";
    document.getElementById("answers").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("start-container").style.display = "none"
    for (var i = 0; i < scoreArr.length; i++){
        var listItem = document.createElement("li")
        listItem.textContent = "Name: " + scoreArr[i].name + " " + "Score: " + scoreArr[i].userScore
        console.log(listItem)
        var scoreList = document.getElementById("score-list");
        scoreList.append(listItem)
    }
};

scoreBtn.onclick = displayScores;

// Question Array
var questions = [
    {
        question: "Where should the script tag be placed in an HTML document?",
        answersArr: [
        "At the end of the body", 
        "At the beginning of the body", 
        "At the end of the head", 
        "At the beginning of the head"
        ],
        correct: "answer1"
    },
    {
        question: "Which popup type needs a text input?",
        answersArr: [
            "window.alert()", 
            "window.prompt()", 
            "window.confirm()", 
            "window.input()"
            ],
        correct: "answer2"
    },
    {
        question: "Which of the following will create a function in JavaScript?",
        answersArr: [
            "var myFunction()", 
            "--myFunction()", 
            "function myFunction()", 
            "myFunction()"
            ],
        correct: "answer3"
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answersArr: [
            "var myFunction()", 
            "--myFunction()", 
            "function myFunction()", 
            "myFunction()"
            ],
        correct: "answer4"
    }, {
        question: "A variable declared and used inside of a function has what scope?",
        answersArr: [
            "Local Scope", 
            "Variable Scope", 
            "Global Scope", 
            "Small Scope"
            ],
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