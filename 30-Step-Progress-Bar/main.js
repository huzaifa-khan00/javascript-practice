let progressBar = document.getElementById("progress-bar-front");
let stepText1 = document.getElementsByClassName("step-text")[1];
let stepText2 = document.getElementsByClassName("step-text")[2];
let stepText3 = document.getElementsByClassName("step-text")[3];
let stepText4 = document.getElementsByClassName("step-text")[4];
let stepCounter = 0;
let progressLength = 0;

function stepForward() {
  stepCounter++;
  progressLength += 25;
  switch (stepCounter) {
    case 1:
      progressBar.style.width = `${progressLength}%`;
      stepText1.innerText = `Step ${stepCounter}`;
      break;

    case 2:
      progressBar.style.width = `${progressLength}%`;
      stepText2.innerText = `Step ${stepCounter}`;
      break;

    case 3:
      progressBar.style.width = `${progressLength}%`;
      stepText3.innerText = `Step ${stepCounter}`;
      break;

    case 4:
      progressBar.style.width = `${progressLength}%`;
      stepText4.innerText = `Step ${stepCounter}`;
      break;

    default:
      break;
  }
}
