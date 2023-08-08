// https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function (s) {
  let counting;
  let length = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      counting = true;
      length++;
      continue;
    }

    if (counting) return length;
  }
  return length;
};
