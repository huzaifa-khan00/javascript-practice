let textFrom = document.querySelector('input');
let displaytext = document.querySelector('h4');


function displayText() {
	displaytext.innerText = textFrom.value = "Hi! "+textFrom.value+",  Welcome to this small program :)";
    textFrom.value = "";
}
