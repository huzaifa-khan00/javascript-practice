let count = 1;

function counter(){
    document.getElementById('display').innerText = ++count;
}

function counterDec(){
    let display = document.getElementById('display');
    if(count <= 0){
        alert("Can't be less than 0");
        return;
    }
    display.innerText = --count;
}