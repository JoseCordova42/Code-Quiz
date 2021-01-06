var body = document.body;

var h1Insert = document.createElement("h1");
var buttonInsert = document.createElement("button");

h1Insert.textContent = "You're about to take a quiz! Get ready!";
buttonInsert.textContent = "Click here to start!";
buttonInsert.setAttribute("id", "startButton");

body.append(h1Insert);
body.append(buttonInsert);

var startButton = document.querySelector("#startButton");
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    h1Insert.style.display = "none";
    buttonInsert.style.display = "none";
    console.log("Mic Check");
});


var questions = [
    {
        name: "Question 1",
        text: "What is 1 + 1?",
        A: "0",
        B: "1",
        C: "2",
        D: "3"
    },
    {
        name: "Question 2",
        text: "What color is the sky?",
        A: "yellow",
        B: "red",
        C: "green",
        D: "blue"
    },
    {
        name: "Question 3",
        text: "What is the last letter of the alphabet?",
        A: "Z",
        B: "Y",
        C: "X",
        D: "W"
    }
];