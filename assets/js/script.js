var displayTime = document.querySelector("#time");
var baseTime = 75;
var startButton = document.querySelector("#start");
var testWrong = document.querySelector("#wrong");
var testNext = document.querySelector("#next");
var pullQ = 0;

var questionText = document.querySelector("#q-text");
var chooseA = document.querySelector("#a")
var chooseB = document.querySelector("#b")
var chooseC = document.querySelector("#c")
var chooseD = document.querySelector("#d")

var content = {
    question: ["What is JavaScript’s official name?", "What does HTML stand for?", "What is used to “find” an HTML element in CSS?", "In JavaScript, what is the process of creating a variable?", "What is a block of code designed to execute a specific task in JavaScript?"],
    optionA: ["A. Scripting by Java", "A. Hyper-beam Technique Made Learnable", "A. Locator", "A. Declaration", "A. Production"],
    optionB: ["B. VecnaScript", "B. HyperText Markup Language", "B. Selector", "B. Identification", "B. Conjunction"],
    optionC: ["C. jQuery", "C. Heuristic Tool Module Language", "C. Specifier", "C. Determination", "C. Function"],
    optionD: ["D. ECMAScript", "D. Hosted Technology Moderating Language", "D. Parameter", "D. Creation", "D. Application"]
};

function gameTime() {
    var timeInterval = setInterval(function() {
        baseTime--;
        displayTime.textContent = baseTime + "seconds remaining.";

        if(baseTime === 0) {
            clearInterval(timeInterval);
        };           
    }, 1000);
};

startButton.addEventListener("click", function() {
    gameTime();
});
    
testWrong.addEventListener("click", function() {
    baseTime -= 10;
 }); 

function nextQuestion() {
    console.log(content.question[pullQ]);
    console.log(content.optionA[pullQ]);
    console.log(content.optionB[pullQ]);
    console.log(content.optionC[pullQ]);
    console.log(content.optionD[pullQ]); 
    
    questionText.textContent = (content.question[pullQ]);
    chooseA.textContent = (content.optionA[pullQ]);
    chooseB.textContent = (content.optionB[pullQ]);
    chooseC.textContent = (content.optionC[pullQ]);
    chooseD.textContent = (content.optionD[pullQ]); 
};

nextQuestion()

testNext.addEventListener("click", function() {
    if (pullQ < (content.question.length)) {
        pullQ++;
        nextQuestion()
    }
});


chooseA.addEventListener("click", function() {
    if (pullQ === 3) {
        console.log("Correct!");
    } else {
        console.log("Incorrect! Lost ten seconds!");
    }
});

chooseB.addEventListener("click", function() {
    if (pullQ === 1 || pullQ === 2) {
        console.log("Correct!");
    } else {
        console.log("Incorrect! Lost ten seconds!");
    }
});

chooseC.addEventListener("click", function() {
    if (pullQ === 4) {
        console.log("Correct!");
    } else {
        console.log("Incorrect! Lost ten seconds!");
    }
});

chooseD.addEventListener("click", function() {
    console.log(pullQ)
    if (pullQ === 0) {
        console.log("Correct!");
    } else {
        console.log("Incorrect! Lost ten seconds!");
    }
});

// function keepHighScore() {
// // var nicknameEl = document.getElementById("nickname");
// // preventDefault();
// // var userInput = nicknameEl.value.trim();
// var userInput = prompt("type name");
// console.log(userInput, "userInput")
// var ledger = JSON.parse(localStorage.getItem("saved-items")) || [];
// var ourStuff = {
//     username: userInput,
//     score: baseTime
// }

// ledger.push(ourStuff)
// localStorage.setItem("saved-items", JSON.stringify(ledger));

// }

// keepHighScore()

//displayLeaderboard
//lookup .sort 
//display content
