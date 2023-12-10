/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowercaseStr  = str.toLowerCase();
  // remove char which not-alphanumeric
  const notAlphabeticStr = lowercaseStr.replace(/[^a-z0-9]/g, '');
  // reverse
  const reversedStr = notAlphabeticStr.split('').reverse().join('');
  return notAlphabeticStr === reversedStr;
}

module.exports = isPalindrome;
