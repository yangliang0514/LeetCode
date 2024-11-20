// https://leetcode.com/problems/powx-n/

// simple recursion
// time: O(n), space: O(n) -> this blows up the call stack due using linear recursion
// summary: use recursion to loop through 1 at a time
var myPow = function (x, n) {
  if (n === 1) return x;
  if (n === 0) return 1;

  if (n < 0) {
    return 1 / myPow(x, -n);
  } else {
    return x * myPow(x, n - 1);
  }
};

// second attempt -> use divide and conquer approach
// time: O(log n), space: O(log n)
// summary: use recursion with divide and conquer technique
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  // you can reduce and pow to half by x ** 2 each time
  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  } else {
    return x * myPow(x * x, (n - 1) / 2);
  }
};

// iterative approach
// time: O(n), spcae: O(1) -> time limit exceeded
// summary: use linear iterative approach
var myPow = function (x, n) {
  let pow = Math.abs(n);
  let num = 1;

  while (pow-- > 0) {
    num *= x;
  }

  return n >= 0 ? num : 1 / num;
};

// iterative with divide and conquer
// time: O(log n), space: O(1) -> optimal approach
// summary: use the same divide and conquer with iterative appraoch
var myPow = function (x, n) {
  if (n === 0) return 1;

  let pow = Math.abs(n);
  let num = 1;

  while (pow > 0) {
    if (pow % 2 !== 0) num *= x;

    x **= 2;
    pow = Math.floor(pow / 2);
  }

  return n >= 0 ? num : 1 / num;
};
