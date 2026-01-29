let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");
let dot = document.getElementById("dot");
let interval;
let minutes = 24;
let seconds = 60;

function tick(isStart) {
  if (isStart === true) {
    console.log("got it");
    clearInterval(interval);
    interval = setInterval(start, 1000);
  }
}

function start() {
  if (minutes === 0 && seconds === 0) {
    minutesDisplay.innerText = "Great Job!";
    secondsDisplay.innerText = "🥳";
    dot.innerText = "";
    clearInterval(interval);
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 60;
  }

  seconds--;

  if (minutes < 10) {
    minutesDisplay.innerText = "0" + minutes;
  }

  if (seconds < 10) {
    secondsDisplay.innerText = "0" + seconds;
  } else {
    minutesDisplay.innerText = minutes;
    secondsDisplay.innerText = seconds;
  }
}

function stop(isStop) {
  clearInterval(interval);
}
