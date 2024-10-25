// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// my solution
// time: O(n * m), space: O(1)
// summary: nested loops for finding the substring
var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  // loop through the haystack string
  outer: for (let i = 0; i < haystack.length; i++) {
    // break if there isn't enough characters left in the haystack
    if (haystack.length - i < needle.length) break;
    // continue if it doesn't match the first letter of needle
    if (haystack[i] !== needle[0]) continue;

    for (let j = 1; j < needle.length; j++) {
      // continue the outer loop if one character doesn't match
      if (haystack[i + j] !== needle[j]) continue outer;
    }
    // only reaches here when there is no mismatch
    return i;
  }
  // only reaches here when there is no match
  return -1;
};
