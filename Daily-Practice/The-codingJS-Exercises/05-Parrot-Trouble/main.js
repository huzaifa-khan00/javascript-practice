// function parrotTrouble(talking, hour){
//   if((talking) && (hour < 7 || hour > 20)){
//        return true;
//      }
//   return false;
// }

// The one liner, if the condition itself has the value or either true or false
// why not to return the condition, if we write in the logic
// 4 < 5 computer will say true, the same happening here, we are saying to the computer
// that talking is true and hour is either less than 7 or 20, it depends on the user Input, if it is then will be true otherwise false. We handles it in one line.


function parrotTrouble(talking, hour){
  return (talking) && (hour < 7 || hour > 20);
}

// Eliminated the usage of if