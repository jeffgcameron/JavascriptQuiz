//create varables to start timer when the start game button is pressed
var timerEl = document.querySelector("#timer");
var quiz = document.querySelector("#start-button");
var timer = document.querySelector("#start-button");
var main = document.querySelector("#main");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");

var currentQuestion = 0;
var timer;
var timerCount = 60;

//Create  list for each questions with answer options in an array
var quizQuestions = [
    {
        question: "What is my favorite hobby",
        choices: ["Skiing", "Mountain Biking", "Roller Blading"],
        answer: "Skiing",
    },
    {
        question: "Where was I born?",
        choices: ["Boston", "NYC", "Philly"],
        answer: "NYC",
    },
    {
        question: "What is my favorite football team?",
        choices: ["Patriots", "Bills", "Bucs"],
        answer: "Patriots"
    }
]

quiz.addEventListener("click", function hideButton() {
    main.style.display = "none"
})

quiz.addEventListener("click", function showQuestion() {
    var currentQuestion = 0;
    question.textContent = quizQuestions[currentQuestion].question;
    quizQuestions[currentQuestion].choices.forEach(function(choice) {
        var button = document.createElement("button");
        button.textContent = choice
        choices.appendChild(button)
        button.addEventListener("click", function workingFunction() {
            console.log("working");
            console.log(button.textContent);
            if (button.textContent === quizQuestions[currentQuestion].answer) {
                currentQuestion++;
                question.textContent = quizQuestions[currentQuestion].question;
                
                // for (var i = 0; i < quizQuestions[currentQuestion].choices.length; i++) {
                //     button.textContent = quizQuestions[currentQuestion].choices
                // }

                quizQuestions[currentQuestion].choices.forEach(function(choice) {
                    var button = document.createElement("button");
                    button.textContent = choice;
                    choices.appendChild(button);
                })
                console.log(quizQuestions[currentQuestion].choices.length);
                console.log("correct");
            }
        });
    }) 
})


// var currentQuestion = 0;

timer.addEventListener("click", function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        // if (timerCount === 0) {
        //     window.alert("you lose")
        // }
    }, 1000);

});

function askQuestion() {
    
}
// quiz.addEventListener("click", startQuiz());