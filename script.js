var body = document.body;
// All Pages------------------------------
var startPage = document.querySelector(".startPage");
var questionsPage = document.querySelector(".questionsPage");
var scorePage = document.querySelector(".scorePage");

// Question Page------------------------------
var questionName = document.querySelector(".name");
var questionText = document.querySelector(".text");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var answerC = document.querySelector("#C");
var answerD = document.querySelector("#D");

// Timer-------------------------------------
var countDown = document.querySelector(".countDown");
var timesUp = document.querySelector(".timesUp");
var secondsLeft = 11;
function runTimer() {
    var timer = setInterval(function() {
        secondsLeft--;
        countDown.textContent = secondsLeft + ":00";
        if (secondsLeft === 0) {
            clearInterval(timer);
            countDown.style.display = "none";
            timesUp.style.display = "initial";
            endQuiz();
        } else if (currentQuestionIndex === 3) {
            clearInterval(timer);
        }
    }, 1000);
}

// Multiple Choice Questions-----------------------------------
var questions = [
    {
        name: "Question 1",
        text: "What is 1 + 1?",
        A: "0",
        B: "1",
        C: "2",
        D: "3",
        correctAnswer: "2"
    },
    {
        name: "Question 2",
        text: "What color is the sky?",
        A: "yellow",
        B: "red",
        C: "green",
        D: "blue",
        correctAnswer: "blue"
    },
    {
        name: "Question 3",
        text: "What is the last letter of the alphabet?",
        A: "Z",
        B: "Y",
        C: "X",
        D: "W",
        correctAnswer: "Z"
    }
];

var currentQuestionIndex = 0;
var userScore = 0;

// Functions------------------------------------------------------
function fillQuestionsPage() {
    var currentQuestion = questions[currentQuestionIndex];
    questionName.textContent = currentQuestion.name;
    questionText.textContent = currentQuestion.text;
    answerA.textContent = currentQuestion.A;
    answerB.textContent = currentQuestion.B;
    answerC.textContent = currentQuestion.C;
    answerD.textContent = currentQuestion.D;
}

var userScoreOnPage = document.querySelector(".userScore");
var highScores = document.querySelector(".highScores");
function endQuiz() {
        questionsPage.style.display = "none";
        scorePage.style.display = "initial";
        userScoreOnPage.textContent = "You scored: " + userScore;
}

// Event Listeners-------------------------------------------------
var startButton = document.querySelector(".startButton");
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startPage.style.display = "none";
    questionsPage.style.display = "initial";
    fillQuestionsPage();
    runTimer();
});

var answerButtons = document.querySelector(".fourButtons");
answerButtons.addEventListener("click", function(event) {
    event.preventDefault();
    var userChoice = event.target.textContent;
    if (userChoice === questions[currentQuestionIndex].correctAnswer) {
        currentQuestionIndex++;
        userScore++;
        if (currentQuestionIndex < 3) fillQuestionsPage();
    } else {
        currentQuestionIndex++;
        secondsLeft = secondsLeft - 2;
        if (currentQuestionIndex < 3) fillQuestionsPage();
    }
    if (currentQuestionIndex === 3) {
        endQuiz();
    }
});

var playAgainBtn = document.querySelector(".playAgain");
playAgainBtn.addEventListener("click", function(event) {
    event.preventDefault();
    currentQuestionIndex = 0;
    userScore = 0;
    secondsLeft = 11;
    scorePage.style.display = "none";
    questionsPage.style.display = "initial";
    timesUp.style.display = "none";
    countDown.style.display = "initial";
    fillQuestionsPage();
    runTimer();
});

var submitScoreBtn = document.querySelector("#scoreSubmit");
submitScoreBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var userInitials = document.querySelector("#userInitials").value;
    localStorage.setItem("initials", userInitials);
    localStorage.setItem("finalScore", userScore);
    var userObj = {initial: userInitials, score: userScore};
    var userList = JSON.parse(localStorage.getItem("highScores"));
    if (userList !== null) {
        var listLength = userList.length;
        for (var i = 0; i < listLength; i++) {
            if (userList[i].score <= userObj.score) {
                userList.splice(i, 0, userObj);
                break;
              }
        }
        if (listLength === userList.length) {
            userList.push(userObj);
        }
    } else {
        userList = [userObj];
    }
    localStorage.setItem("highScores", JSON.stringify(userList));
});