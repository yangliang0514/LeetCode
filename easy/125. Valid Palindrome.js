// https://leetcode.com/problems/valid-palindrome/

// my initial solution, using 2-pointer
// time: O(n), space: O(1)
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const leftCode = s[left].toLowerCase().charCodeAt();
    const rightCode = s[right].toLowerCase().charCodeAt();

    // move left if left isn't alphanumeric
    if (!isAlphaNumeric(leftCode)) {
      left++;
      continue;
    }
    // move right if right isn't alphanumeric
    if (!isAlphaNumeric(rightCode)) {
      right--;
      continue;
    }
    // return false if left and right don't match
    if (leftCode !== rightCode) return false;

    left++;
    right--;
  }

  // if it went through the entire string without issue,
  // it is a palindrome
  return true;
};

// return if the code is within 48 ~ 57 or 97 ~ 122, which is 0 ~ 9 and all lower case letters
function isAlphaNumeric(code) {
  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}
