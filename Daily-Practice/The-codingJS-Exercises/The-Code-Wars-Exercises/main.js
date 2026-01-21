function repeatStr (n, s) {
  if(n > 0){
  var times = n;
  }
  let string = "";
  
  for (let i = 1; i <= times; i++){
    string += s;  
  }
  return string;
}