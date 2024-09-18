// https://leetcode.com/problems/longest-palindromic-substring

// my initial solution (2-pointer) (expand around center)
// time: O(n^2), space: O(1)
var longestPalindrome = function (s) {
  if (s.length === 1) return s;

  let result = '';

  // iterate through the string
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    // a palindromic string's center is always a homogeneous string
    // whether it's an odd palindrome or even palindrome
    // here finds the longest homogeneous string, which is the center of a palindrome
    while (s[left] === s[right + 1]) {
      // skips the loop to the first letter behind the homogeneous string
      // since it's impossible to have a longer palindrome inside
      i = ++right;
    }

    // expand around center
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // replace result if current palindrome is longer than the previous longest
      if (right - left + 1 > result.length) {
        result = s.slice(left, right + 1);
      }
      // expand again
      left--;
      right++;
    }
  }
  return result;
};

// TODO: Manacher's algorthm
