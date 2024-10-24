// https://leetcode.com/problems/first-unique-character-in-a-string/

// my solution
// time: O(n), space: O(1) -> since there are 26 characters at most
var firstUniqChar = function (s) {
  // build a map to record appearances of each character
  let count = {};
  // build up the count
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]]++;
    } else {
      count[s[i]] = 1;
    }
  }
  // loop through to find and return the first index that only appeared once
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }

  return -1;
};
