// https://leetcode.com/problems/ransom-note/

// my solution
// time: O(n), space: O(1)
// summary: use an array to record the letter count
var canConstruct = function (ransomNote, magazine) {
  // make a 26 element array to record letter count
  let letters = new Array(26).fill(0);

  // fill in letter count of the `magazine` word
  for (const letter of magazine) {
    letters[letter.charCodeAt() - 97]++;
  }

  // loop through the `ransomNote`,
  // return false if there isn't enough letter in `magazine`
  for (const letter of ransomNote) {
    if (--letters[letter.charCodeAt() - 97] < 0) return false;
  }

  return true;
};
