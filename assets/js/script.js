var displayTime = document.querySelector("#time");
var baseTime = 75;
var startButton = document.querySelector("#start");

var correctAnswer = ("D. ECMAScript" || "B. HyperText Markup Language" || "B. Selector")

var content = {
    question: ["What is JavaScript’s official name?", "What does HTML stand for?", "What is used to “find” an HTML element in CSS?"],
    optionA: ["A. Scripting by Java", "A. Hyper-beam Technique Made Learnable", "A. Locator"],
    optionB: ["B. VecnaScript", "B. HyperText Markup Language", "B. Selector"],
    optionC: ["C. jQuery", "C. Heuristic Tool Module Language", "C. Specifier"],
    optionD: ["D. ECMAScript", "D. Hosted Technology Moderating Language", "D. Parameter"]
};

function gameTime() {
    var timeInterval = setInterval(function() {
        baseTime--;
        displayTime.textContent = baseTime + "seconds remaining.";

        if(baseTime === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
}

startButton.addEventListener("click", function() {
    gameTime();
}) 
    
