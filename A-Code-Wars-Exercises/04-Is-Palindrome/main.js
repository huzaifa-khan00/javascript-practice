function isPalindrome(x) {

  x = x.toLowerCase();

  let reverseStr = '';
  
  for(let i = 0; i < x.length; i++){
    reverseStr += x[x.length - 1 - i];
  }
  return reverseStr == x;
}

// write your Palindrome 
isPalindrome("huluh");