// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// my solution
// time: O(4^n * n), space: O(4^n) -> from LeetCode, I don't know how to count this one
// summary: create a mapping first, then recursively build up the strings
const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

var letterCombinations = function (digits, str = "", index = 0, results = []) {
  // edge case: return empty array if there are no digits
  if (digits === "") return [];
  // base case: push the str to the results array when it reached the end
  if (index >= digits.length) {
    results.push(str);
    return;
  }
  // loop through and recursively calling each possible character
  for (const char of map[digits[index]]) {
    letterCombinations(digits, str + char, index + 1, results);
  }
  // return the results array
  return results;
};
