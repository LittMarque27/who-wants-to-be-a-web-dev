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

var checkAnswer = document.querySelectorAll(".press")

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
    if (chooseA.value === "D. ECMAScript" || chooseA.value === "B. HyperText Markup Language" || chooseA.value === "B. Selector") {
        console.log("Correct!");
    } else {
        console.log("Incorrect! Lost ten seconds!");
    }
})

chooseB.addEventListener("click", function() {
    if (chooseB.value === "D. ECMAScript" || chooseB.value === "B. HyperText Markup Language" || chooseB.value === "B. Selector") {
        console.log("Correct!");
    } else {
        console.log("Incorrect! Lost ten seconds!");
    }
})

chooseC.addEventListener("click", function() {
    if (chooseC.value === "D. ECMAScript" || chooseC.value === "B. HyperText Markup Language" || chooseC.value === "B. Selector") {
        console.log("Correct!");
    } else {
        console.log("Incorrect! Lost ten seconds!");
    }
})


chooseD.addEventListener("click", function() {
    if (chooseD.value === "D. ECMAScript" || chooseD.value === "B. HyperText Markup Language" || chooseD.value === "B. Selector") {
        console.log("Correct!");
    } else {
        console.log("Incorrect! Lost ten seconds!");
    }
})

