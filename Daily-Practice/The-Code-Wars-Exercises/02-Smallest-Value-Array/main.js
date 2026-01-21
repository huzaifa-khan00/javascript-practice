function findSmallestInt(arr) {
  //your code here
  let smallNum = arr[0];
  

  for (var i = 0; i < arr.length; i++){

    if(smallNum > arr[i]){
        smallNum = arr[i];      
    } 
  }
  console.log(smallNum);
  
}

findSmallestInt([78,56,232,12,8, -350]);