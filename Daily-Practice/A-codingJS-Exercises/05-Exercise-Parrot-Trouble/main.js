function parrotTrouble(talking, hour){
  if((talking) && (hour < 7 || hour > 20)){
       return true;
     }
  return false;
}