var score = document.querySelector("#score");
// var theScore = [];
// var theName = [];

function init() {
    var storeScore = JSON.parse(localStorage.getItem("score"));
    var name = JSON.parse(localStorage.getItem("name"));
    score.textContent = name + ": " + storeScore;
    
    for (var i = 0; i < storeScore.length; i++) {
        var theScores = theScore[i];
        var li = document.createElement("li")
        li.textContent = theScores
        score.textContent = storeScore;
    }
    
    for (var i = 0; i < name.length; i++) {
        var theNames = theName[i];
        var olName = document.createElement("ol")
        olName.textContent = theNames
    }

    
}

init();
