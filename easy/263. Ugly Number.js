// https://leetcode.com/problems/ugly-number/

// my solution
// time: O(log n), space: O(1)
// summary: divide all 2, 5, 7 and see if the result is 1
var isUgly = function (n) {
  if (n <= 0) return false;

  while (true) {
    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 3 === 0) {
      n /= 3;
    } else if (n % 5 === 0) {
      n /= 5;
    } else {
      return n === 1;
    }
  }
};
