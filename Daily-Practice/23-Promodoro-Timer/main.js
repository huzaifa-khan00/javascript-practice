let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let dot = document.getElementById('dot');
let interval;
let minutes = 0;
let seconds = 5;

function start(){

    if(minutesDisplay.innerText === "Great Job!"){
    clearInterval(interval);
    return
}

    if(seconds === 1){
        minutes = minutes-1;
        seconds = 60;
    }

    seconds = seconds -1;

        if(minutes === 0 && seconds === 1){
        minutesDisplay.innerText = "Great Job!";
        secondsDisplay.innerText = "🥳"
        dot.innerText = '';
        return
    }
    
    minutesDisplay.innerText = minutes;
    secondsDisplay.innerText = seconds;

}

   interval = setInterval(start, 1000);