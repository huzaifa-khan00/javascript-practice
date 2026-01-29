let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");
let dot = document.getElementById("dot");
let interval;
let minutes = 24;
let seconds = 59;
let isStopped = false;
let startIsPressed = false;

function start() {
  if (isStopped === true) {
    startIsPressed = true;
    isStopped = false;
  }

  if (startIsPressed === true) {
    interval = setInterval(start, 1000);
    startIsPressed = false;
  }

  if (minutesDisplay.innerText === "Great Job!") {
    clearInterval(interval);
    return;
  }

  if (seconds === 1) {
    minutes = minutes - 1;
    seconds = 60;
  }

  seconds = seconds - 1;

  if (minutes === 0 && seconds === 1) {
    minutesDisplay.innerText = "Great Job!";
    secondsDisplay.innerText = "🥳";
    dot.innerText = "";
    return;
  }

  if (minutes < 10) {
    minutesDisplay.innerText = "0" + minutes;
  }

  if (seconds < 10) {
    secondsDisplay.innerText = "0" + seconds;
  }

  minutesDisplay.innerText = minutes;
  secondsDisplay.innerText = seconds;
}

interval = setInterval(start, 1000);

function stop() {
  isStopped = true;
  console.log(isStopped);
  clearInterval(interval);
}
