// function makes10(a, b){
//   return ((a + b === 10) || (a === 10 || b == 10));
// }

// we can also remove parenthesis because it is math already
// and math don't always need parenthesis

function makes10(a, b){
  return a + b === 10 || a === 10 || b === 10;
}
