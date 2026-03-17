function myIncludes(array, val) {
  for (var i = 0; i < array.length; i++) {
        if(array[i] === val){
           return true;
        }
  }
  return false;
}

let result = myIncludes([1, 3, 5, 7, 9], 5);
console.log(result);