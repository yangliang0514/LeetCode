// https://leetcode.com/problems/fibonacci-number/

// recursive solution
// time: O(2^n), space: O(n) -> due to call stack
// summary: recursively calling the function to build up the number
// fib(5) = fib(4) + fib(3),
// so then fib(3) + fib(2) + fib(2) + fib(1) is called after, see `fib(2)` is called twice?
var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

// recursive solution with memoization (only calculate each value once)
// time: O(n), space: O(n) -> call stack and the memo object
// summary: pass a reference of the memo object and store calculated value, so it won't be calculated more than once
var fib = function (n, memo = {}) {
  if (n <= 1) return n;
  // store calculated value in the object
  if (!(n in memo)) {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }

  return memo[n];
};

// iterative solution (most efficient)
// time: O(n), space: O(1)
// summary: store 2 previous numbers in variables, then calculate the next value, until reaches the target
var fib = function (n) {
  if (n < 1) return 0;

  let prev1 = 0;
  let prev2 = 1;

  while (n > 1) {
    const newNum = prev1 + prev2;
    prev1 = prev2;
    prev2 = newNum;

    n--;
  }

  return prev2;
};
