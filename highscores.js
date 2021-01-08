var scoreContainer = document.getElementById("listName");
function renderUsersPlusScores() {
    var userList = JSON.parse(localStorage.getItem("highScores"));
    if (userList !== null) {
        for (var i =0; i < userList.length; i++) {
            var scoreName = document.createElement("li");
            scoreName.appendChild(document.createTextNode(`${userList[i].initial} - ${userList[i].score} pts`));
            scoreContainer.appendChild(scoreName);
        }
    } else {
        var noScoreMsg = document.createElement("p");
        noScoreMsg.appendChild(document.createTextNode("No Scores Yet!"));
        scoreContainer.appendChild(noScoreMsg);
    }
}
renderUsersPlusScores();