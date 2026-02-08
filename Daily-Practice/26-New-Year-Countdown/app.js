let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let newYearTime = new Date("Jan 1, 2027 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  let currentTime = new Date().getTime();

  let difference = newYearTime - currentTime;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(difference / days);
  let h = Math.floor((difference % days) / hours);
  let m = Math.floor((difference % hours) / minutes);
  let s = Math.floor((difference % minutes) / seconds);
  day.innerText = d;
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
}

setInterval(updateCountdown, 1000);