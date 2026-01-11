let textFrom = document.querySelector('input');
let displaytext = document.querySelector('h4');
let greetUser = document.createElement('greet-user').value = "Hi, "+textFrom.value+" ! Welcome to this small program :)";

function displayText() {

    if(displaytext.innerText === "The output will appear here"){
        alert("Can't be empty")
        return;
    }
    displaytext.innerText = greetUser;
    textFrom.value = '';
}
