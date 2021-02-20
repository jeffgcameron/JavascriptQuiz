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
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount === 0) {
            window.alert("you lose")
        }
    }, 1000);

});


if (quizQuestion[i].choices === answer) {
    i++;
    }


//once the first question is chosen correctly, hid first question and show second question

//once the second question is chose correctly, hide the second questions and show the third question

//once the third question is answer correctly, show the score and save to the highscore tab

//if incorrect answer is chosen, reduce time by 5 seconds

//if timer gets to 0, say, "you lose"

//function to store 

// //local storage
// var highScores = [];

// // highScores = JSON.parse(localStorage.getItem("hi scores"));
// // console.log(highScores);
// // highScores.forEach(element => {
// //     var newEl = document.createElement("ul");
// //     newEl.textContent = `Intitials: ${element.initials}, Score: ${element.score}`;
// //     document.getElementById("high-scores").appendChild(newEl);
// // });

// //local storage stuff
// function startQuiz() {
//     get
//     //start timer
// }

// function checkAnswer() {

// }
// function endQuiz() {
// //store score
// highScores.push({ score: score, initials: initials});
// localStorage.setItem("hi scores", JSON.stringify(highScores));
// }

// function updateDisplay() {
// //empty high score
// //update display
// }
// function getLocalScores() {
//     highScores = JSON.parse(localStorage.getItem("hi scores"));
//     //localStorage.getItem and store in Global array
//     //update display
// }
// document.querySelector("click-me").addEventListener("click", startQuiz);
// updateDisplay();

// // startTimer();
// startQuiz();

//need to create an array witht hename of highScores with blank property values