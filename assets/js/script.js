var displayTime = document.querySelector("#time")
var baseTime = 5
var startButton = document.querySelector("#start")

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
    
