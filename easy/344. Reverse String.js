// https://leetcode.com/problems/reverse-string/

// my solution
// time: O(n), space: O(1)
// summary: use 2-pointers to swap string in list, (input is a list of string, modify it in place and don't return anything)
var reverseString = function (s) {
  // 2-pointers, one from the start, one from the end
  let left = 0;
  let right = s.length - 1;
  // swap strings
  while (left < right) {
    const leftS = s[left];
    s[left] = s[right];
    s[right] = leftS;

    left++;
    right--;
  }
};
