// https://leetcode.com/problems/circular-sentence/

// my solution
// time: O(n), space: O(1)
var isCircularSentence = function (sentence) {
  // check the first and the last letter
  if (sentence[0] !== sentence[sentence.length - 1]) return false;
  // see if each word end with the same letter as the next word's starting letter
  for (let i = 0; i < sentence.length - 1; i++) {
    if (sentence[i] === " " && sentence[i - 1] !== sentence[i + 1]) {
      return false;
    }
  }
  // if nothing invalid is found, it is a circular sentence
  return true;
};
