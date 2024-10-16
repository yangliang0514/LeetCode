// https://leetcode.com/problems/is-subsequence/

// my solution
// time: O(n), space: O(1)
// summary: loop through both strings at once to find matching character
var isSubsequence = function (s, t) {
  let pointS = 0;
  let pointT = 0;
  // loop through both strings, when both haven't reach the end'
  while (pointS < s.length && pointT < t.length) {
    // only increment s pointer when character matched
    if (s[pointS] === t[pointT]) pointS++;
    pointT++;
  }
  // if s pointer reaches the end, means all characters in s was found in t
  return pointS === s.length;
};
