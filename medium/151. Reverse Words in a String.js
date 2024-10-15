// https://leetcode.com/problems/reverse-words-in-a-string/

// my solution, use 1 pointer
// time: O(n), space: O(n),
// in JavaScript strings can be modified in place, so it shouldn't be possible to achieve O(1)
// summary: loop from the last character and build up words along the way
var reverseWords = function (s) {
  let result = "";
  let pointer = s.length - 1;
  let word = "";

  while (true) {
    // return when the pointer reaches before the start
    if (pointer < -1) return result;
    if (s[pointer] === " " || pointer < 0) {
      // add word to the result string
      if (word !== "") {
        const space = result === "" ? "" : " ";
        result = result + space + word;
        word = "";
      }
      pointer--;
      continue;
    }
    // build up the word
    word = s[pointer] + word;
    pointer--;
  }
};
