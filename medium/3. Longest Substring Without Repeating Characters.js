// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// time: O(n), space: O(n)
var lengthOfLongestSubstring = function (s) {
  let start = 0; // starting index of the substring
  let length = 0; // keep in track the longest substring length
  const letters = {}; // record of letters that have appeared

  for (let i = 0; i < s.length; i++) {
    // if the letter has appeared and in the current window
    if (letters[s[i]] >= start) {
      start = letters[s[i]] + 1; // change the current window's starting index
      letters[s[i]] = i; // change the index of that letter
      continue;
    }

    letters[s[i]] = i; // store the current letter and its index
    length < i - start + 1 ? (length = i - start + 1) : null; // update the length if the new length is larger
  }

  return length;
};
