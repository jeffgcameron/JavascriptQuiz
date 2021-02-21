//create varables to start timer when the start game button is pressed
var timerEl = document.querySelector("#timer");
var quiz = document.querySelector("#start-button");
var timer = document.querySelector("#start-button");
var main = document.querySelector("#main");
var question = document.querySelector("#question");
var choices = document.querySelector("#choices");
var score = document.querySelector("#score");
var wrong = document.querySelector("#wrong");
var win = document.querySelector("h1");
var tryAgain = document.querySelector("#try-again");
var formEl = document.querySelector("#form");
var input = document.querySelector("#input");
var submit = document.querySelector("#submit");

var currentQuestion = 0;
var timer;
var timerCount = 60;

//Create  list for each questions with answer options in an array
var quizQuestions = [
    {
        question: "What is my favorite hobby?",
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
        button.classList.add("clickme")
        button.classList.add("row")
        button.textContent = choice
        choices.appendChild(button)
        button.addEventListener("click", function workingFunction() {
            console.log("working");
            console.log(button.textContent);
            if (button.textContent === quizQuestions[currentQuestion].answer) {
                currentQuestion++;
                question.textContent = quizQuestions[currentQuestion].question;
                choices.innerHTML = "";
                wrong.innerHTML = "";
                quizQuestions[currentQuestion].choices.forEach(function(choice) {
                    var button = document.createElement("button");
                    button.classList.add("clickme")
                    button.classList.add("row")
                    button.textContent = choice;
                    choices.appendChild(button);
                    button.addEventListener("click", function againFunction() {
                        console.log("yeah buddy");
                        console.log(button.textContent);
                        if (button.textContent === quizQuestions[currentQuestion].answer) {
                            console.log("yeahhhhhh");
                            currentQuestion++;
                            question.textContent = quizQuestions[currentQuestion].question;
                            choices.innerHTML = "";
                            wrong.innerHTML = "";
                            quizQuestions[currentQuestion].choices.forEach(function(choice) {
                                var button = document.createElement("button");
                                button.classList.add("clickme")
                                button.classList.add("row")
                                button.textContent = choice;
                                choices.appendChild(button);
                                button.addEventListener("click", function finalFunction() {
                                    console.log("final one");
                                    console.log(button.textContent);
                                    if (button.textContent === quizQuestions[currentQuestion].answer) {
                                        endGame()
                                    } else {
                                        timerCount = timerCount -10;
                                        wrong.textContent = "WRONG! Try Again!"
                                    }
                                })
                            })
                        } else {
                            timerCount = timerCount -10;
                            wrong.textContent = "WRONG! Try Again!"
                        }
                    })
                    
                })
            } else {
                timerCount = timerCount -10;
                wrong.textContent = "WRONG! Try Again!"
            }
        });
    }) 
})

function endGame() {
    console.log("you win!");
    console.log(timerCount);
    choices.innerHTML = "";
    wrong.innerHTML = ""
    question.innerHTML = "";
    win.textContent = "YOU WIN!"
    score.textContent = "Score: " + timerCount;
    stopTimer();
    timerEl.textContent = "Winner Winner Chicken Dinner!!!"
    input.textContent = "Write your name here:"
    var form = document.createElement("INPUT"); 
    form.setAttribute("type", "text");
    form.classList.add("username")
    formEl.appendChild(form)
    var submitButton = document.createElement("button");
    submitButton.classList.add("submitme")
    submit.appendChild(submitButton)
    submitButton.textContent = "Submit"
    submitButton.addEventListener("click", function submitName() {
        console.log("submit");
        var input = document.querySelector(".username");
        localStorage.setItem("name", input.value);

    })
}




function loseGame() {
    choices.innerHTML = "";
    wrong.innerHTML = ""
    question.innerHTML = "";
    win.textContent = "YOU LOSE!!"
    tryAgain.textContent = "Play Again"
    stopTimer()
}
function stopTimer() {
    clearInterval(timer)
}

timer.addEventListener("click", function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount < 1) {
            timerEl.textContent = "Loser!!";
            stopTimer();
            loseGame();
        } 
    }, 1000);

});

