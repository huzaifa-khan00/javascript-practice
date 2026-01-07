let childCount = document.getElementById('container').children.length;
let container = document.getElementById('container');
let success = false;

document.getElementById("numOfChild").innerHTML = childCount;

for(var i=0; i < childCount; i++){
	container.children[i].style.fontSize = "30px";
}

for(var j=0; j < childCount; j++){
    if(j %2 === 0){
        container.children[j].style.color = "red";
        success = true;
    };
}

if(success === false){
    document.getElementById('note').style.display = "block";
}