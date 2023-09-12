var time = 0;
var score = 0;

function timer(){
    time = 100;
    if (time > 0){
        time--;  
    };  
};

function startQuiz(){

};

document.getElementById("timer").textContent = time;

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