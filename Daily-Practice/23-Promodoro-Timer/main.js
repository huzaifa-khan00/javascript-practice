let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');

let minutes = 0;
let seconds = 5;

function start(){

    if(seconds === 1){
        minutes = minutes-1;
        seconds = 60;
    }
    seconds = seconds -1;

    minutesDisplay.innerText = minutes;
    secondsDisplay.innerText = seconds;
    
}

setInterval(start, 1000);

