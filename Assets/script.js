//create varables to start timer when the start game button is pressed
var timerEl = document.querySelector("#timer");
var startQuiz = document.querySelector("#start-button");
var startTimer = document.querySelector("#start-button");
var main = document.querySelector("#main");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");

var timer;
var timerCount;

//Create unordered list for each questions with answer options in an array
var quizQuestions = [
    {
        question: "What is the skeleton of all websites",
        choices: ["HTML", "CSS", "Javascript"],
        answer: "HTML",
    },
    {
        question: "What is my name",
        choices: ["jeff", "joe", "john"],
        answer: "jeff",
    },
    {
        question: "What is my last name",
        choices: ["cam", "carm", "cameron"],
        answer: "cameron"
    }
]


//start the quiz once the start button is pressed. Hide original content and show the first question.
startQuiz.addEventListener("click", function startQuiz() {
    main.style.display = "none";
    var currentQuestion = 0;
        question.textContent = quizQuestions[currentQuestion].question;
        quizQuestions[currentQuestion].choices.forEach(function(choice) {
            var listOfChoices = document.createElement("button");
            listOfChoices.textContent = choice;
            choices.appendChild(listOfChoices);
        });
    })


//when start button is pressed, start the timer
startTimer.addEventListener("click", function startTimer() {
    timer = setInterval(function () {
        timerCount = 60;
        timerCount--;
        timerEl.textContent = timerCount;
    }, 1000);
});


//once the first question is chosen correctly, hid first question and show second question

//once the second question is chose correctly, hide the second questions and show the third question

//once the third question is answer correctly, show the score and save to the highscore tab

//if incorrect answer is chosen, reduce time by 5 seconds

//if timer gets to 0, say, "you lose"

//function to stoe 