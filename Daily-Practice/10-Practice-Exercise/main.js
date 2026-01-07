let childCount = document.getElementById('container').children.length;
let container = document.getElementById('container');

document.getElementById("numOfChild").innerHTML = childCount;

for(var i=0; i < childCount; i++){
	container.children[i].style.fontSize = "20px";
}

