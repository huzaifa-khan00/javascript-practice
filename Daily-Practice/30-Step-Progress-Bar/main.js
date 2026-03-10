let progressBar = document.getElementById("progress-bar-front");
let step = document.getElementsByClassName("step");
let stepText = document.getElementsByClassName("step-text");
let previousStep = document.getElementById("previous-step-btn");
let nextStep = document.getElementById("next-step-btn");
let stepCounter = 0;
let oneStepForward;
let progressLength = 0;

function stepForward() {
  stepCounter++;
  progressLength += 25;
  if (stepCounter !== 0) {
      previousStep.removeAttribute("disabled");
    }
  if(stepCounter === 4){
        nextStep.setAttribute('disabled', 'true');
    }
  switch (stepCounter) {
    case 1:
      progressBar.style.width = `${progressLength}%`;
      stepText[stepCounter].innerText = `Step ${stepCounter}`;
      step[stepCounter].classList.remove("step-unchecked");
      void step[stepCounter].offsetWidth;
      step[stepCounter].classList.add("step-checked");
      void step[stepCounter].offsetWidth;
      stepText[stepCounter].classList.add("text-animate");
      break;

    case 2:
      progressBar.style.width = `${progressLength}%`;
      stepText[stepCounter].innerText = `Step ${stepCounter}`;
      step[stepCounter].classList.remove("step-unchecked");
      void step[stepCounter].offsetWidth;
      step[stepCounter].classList.add("step-checked");
      void step[stepCounter].offsetWidth;
      stepText[stepCounter].classList.add("text-animate");
      break;

    case 3:
      progressBar.style.width = `${progressLength}%`;
      stepText[stepCounter].innerText = `Step ${stepCounter}`;
      step[stepCounter].classList.remove("step-unchecked");
      void step[stepCounter].offsetWidth;
      step[stepCounter].classList.add("step-checked");
      void step[stepCounter].offsetWidth;
      stepText[stepCounter].classList.add("text-animate");
      break;

    case 4:
      progressBar.style.width = `${progressLength}%`;
      stepText[stepCounter].innerText = `Final`;
      step[stepCounter].classList.remove("step-unchecked");
      void step[stepCounter].offsetWidth;
      step[stepCounter].classList.add("step-checked");
      void step[stepCounter].offsetWidth;
      stepText[stepCounter].classList.add("text-animate");
      break;

    default:
      break;
  }
}

function stepBackward(){
    stepCounter--;
    oneStepForward = stepCounter+1;
  progressLength -= 25;
  if (stepCounter !== 4) {
      nextStep.removeAttribute("disabled");
    }
  if(stepCounter === 0){
        previousStep.setAttribute('disabled', 'true');
    }
      switch (stepCounter) {
    case 3:
      progressBar.style.width = `${progressLength}%`;
      stepText[oneStepForward].innerText = ``;
      step[oneStepForward].classList.remove("step-checked");
      stepText[stepCounter].classList.remove("text-animate")
      step[oneStepForward].classList.add("step-unchecked");
      break;

    case 2:
      progressBar.style.width = `${progressLength}%`;
      stepText[oneStepForward].innerText = ``;
      step[oneStepForward].classList.remove("step-checked");
      stepText[stepCounter].classList.remove("text-animate")
      step[oneStepForward].classList.add("step-unchecked");
      break;

    case 1:
      progressBar.style.width = `${progressLength}%`;
      stepText[oneStepForward].innerText = ``;
      step[oneStepForward].classList.remove("step-checked");
      stepText[stepCounter].classList.remove("text-animate")
      step[oneStepForward].classList.add("step-unchecked");
      break;

    case 0:
      progressBar.style.width = `${progressLength}%`;
      stepText[oneStepForward].innerText = ``;
      step[oneStepForward].classList.remove("step-checked");
      stepText[stepCounter].classList.remove("text-animate")
      step[oneStepForward].classList.add("step-unchecked");
      break;

    default:
      break;
  }

}