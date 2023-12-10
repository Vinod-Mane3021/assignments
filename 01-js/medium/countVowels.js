/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

// solution 1:
// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let counter = 0;
//   for (let i=0; i<str.length; i++) {
//     const vowelExist = vowels.find(vowel => vowel == str[i]);
//     if (vowelExist) {
//       counter++;
//     }
//   }
//   return counter;
// }

// solution 2:
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (const e of str) {
    const vowelExist = vowels.find( vowel => vowel.toLowerCase() == e.toLowerCase() );
    if (vowelExist) {
      counter++;
    }
  }
  return counter;
}


module.exports = countVowels;


