//Base variables for functions and reset
var baseTime = 75;
var pullQ = 0;
var score = 0;
var feedbackEl = document.querySelector("#feedback");

//Timer related variables
var displayTime = document.querySelector("#time");
var startButton = document.querySelector("#start");
var testWrong = document.querySelector("#wrong");
var testNext = document.querySelector("#next");

//Multiple Choice related variables
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

//Score-related variables
yourScoreEl = document.querySelector("#your-score")

//Values that need to be reset for each attempt
function resetAll() {
    baseTime = 75;
    pullQ = 0;
    score = 0;
    feedbackEl.textContent = "";
    yourScoreEl.textContent ="";
}

//Timer function with game completion conditions
function gameTime() {
    var timeInterval = setInterval(function() {
        baseTime--;
        displayTime.textContent = baseTime + "seconds remaining.";

        if(baseTime === 0) {
            clearInterval(timeInterval);
            timeOut();
        };
        if(baseTime < 0) {
            clearInterval(timeInterval);
            displayTime.textContent = "Finished!"
        };           
    }, 1000);
};

startButton.addEventListener("click", function() {
    resetAll();
    nextQuestion();
    gameTime();
    
});
    
testWrong.addEventListener("click", function() {
    thatsWrong()
 }); 

function timeOut() {
    questionText.textContent = ("Your time is up! Press Start to try again")
}

//Poulates question and answers
function nextQuestion() { 
    questionText.textContent = (content.question[pullQ]);
    chooseA.textContent = (content.optionA[pullQ]);
    chooseB.textContent = (content.optionB[pullQ]);
    chooseC.textContent = (content.optionC[pullQ]);
    chooseD.textContent = (content.optionD[pullQ]); 
};

// nextQuestion() 

//Progresses quiz; pullQ is referenced in other functions
function moveForward() {
    if (pullQ < (content.question.length)) {
        pullQ++;
        nextQuestion()
    };
    if (pullQ >= (content.question.length)) {
        gameFinish()
    };
}

testNext.addEventListener("click", function() {
    moveForward();
});

function gameFinish() {
    score = baseTime;
    console.log(score);
    baseTime = -1;
    questionText.textContent = ("Congratulations! View and enter your High Score below.");
    yourScoreEl.textContent = ("Your score is " + score + " points!")
};

function thatsWrong() {
    feedbackEl.textContent = ("That was Incorrect! 10 Seconds Lost!");
    if (baseTime > 10) {
        baseTime -= 10;
        };
    if (baseTime <= 10) {
            baseTime = 1;
    };
};

function thatsRight() {
    feedbackEl.textContent = ("That was Correct!")
}

//Multiple-Choice selection, answer verification, and progression
chooseA.addEventListener("click", function() {
    if (pullQ === 3) {
        console.log("Correct!");
        thatsRight();
    } else {
        console.log("Incorrect! Lost ten seconds!");
        thatsWrong();
    };
    moveForward();
});

chooseB.addEventListener("click", function() {
    if (pullQ === 1 || pullQ === 2) {
        console.log("Correct!");
        thatsRight();
    } else {
        console.log("Incorrect! Lost ten seconds!");
        thatsWrong();
    };
    moveForward();
});

chooseC.addEventListener("click", function() {
    if (pullQ === 4) {
        console.log("Correct!");
        thatsRight();
    } else {
        console.log("Incorrect! Lost ten seconds!");
        thatsWrong();
    }
    moveForward();
});

chooseD.addEventListener("click", function() {
    console.log(pullQ)
    if (pullQ === 0) {
        console.log("Correct!");
        thatsRight();
    } else {
        console.log("Incorrect! Lost ten seconds!");
        thatsWrong();
    }
    moveForward();;
});


//Really having trouble with local storage and leaderboard. Might not be done before grading
//Leaving in commented out code to work with later.

// var nicknameEl = document.getElementById("nickname");

// var userInfo = {
//     username: nicknameEl,
//     userScore: score
// };


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
