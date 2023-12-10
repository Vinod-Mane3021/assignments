/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {  
  const s1 = str1.replace(/\s/g, '').toLowerCase();
  console.log('s1 : ' + s1);
  const s2 = str2.replace(/\s/g, '').toLowerCase();
  console.log('s2 : ' + s2);
  
  const sortedStr1 = s1.split('').sort().join();
  const sortedStr2 = s2.split('').sort().join();

  return sortedStr1 == sortedStr2;
}

module.exports = isAnagram;



