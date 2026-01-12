let counter = 0;

function resetCount(){ 
    counter ="Counter is reset ✅";
    document.getElementById('counter-display').innerText = counter;
}

function increaseCount(){ 
    if(counter == "Counter is reset ✅"){
        counter = 1;
        document.getElementById('counter-display').innerText = counter;
        return;
    }
    counter++;
    document.getElementById('counter-display').innerText = counter;
}

function decreaseCount(){ 
    if(counter == "Counter is reset ✅"){
        alert("Must be greater than 0")
        return;
    }
    if(counter < 1){
        alert('Must be greater than 0')
        return;
    }
    counter--;
    document.getElementById('counter-display').innerText = counter;
}