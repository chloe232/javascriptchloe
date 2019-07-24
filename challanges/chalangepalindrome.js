/*Challenge 1:

  Create a variable called num.

  Check if the number is a palindrome 
  (looks the same forward as it does backwards e.g. 1001 or 20202).


function palindrome (str){
    var reg = /[\W_]/g;

    var smallStr = str.toLowerCase().replace(reg, "");

    var reversed =str.split ("").reverse().join("");
    if (reversed === str) return true;

    return false; 
}

isPalindrome = (str) => {


console.log(str.split('').reverse().join(''));
return str === str.split('').reverse().join('');
}
console.log(isPalindrome("1001"));*/

isPalindrome = (str) => {


  console.log(str.split('').reverse().join(''));

  if(str===str.split('').reverse().join(''))
  {return true;}
  else {return false;}
  }
  console.log(isPalindrome("1001"));


