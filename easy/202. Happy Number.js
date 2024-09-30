// https://leetcode.com/problems/happy-number/

// time: O(log n), space: O(1)
var isHappy = function (n) {
  let occured = new Set();

  // while n is not 1 and has not occured, find the square sum again
  // if a number has occured before, we're in an infinite loop
  while (n !== 1 && !occured.has(n)) {
    // store occured number
    occured.add(n);
    let squareSum = 0;

    // count the new square sum
    while (n > 0) {
      squareSum += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    // update the new square sum
    n = squareSum;
  }

  // will get here only if n === 1 or n has occured before,
  return n === 1;
};
