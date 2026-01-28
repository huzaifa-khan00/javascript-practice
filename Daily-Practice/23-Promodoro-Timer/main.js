let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let time = new Date(2026, 0, 0, 0, 25, 0, 0);
let minutes = time.getMinutes();
let seconds = time.getSeconds();

function start(){
    minutesDisplay.innerText = minutes;
    secondsDisplay.innerText = seconds;
    setInterval(start, 1000);
}