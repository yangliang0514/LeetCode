// https://leetcode.com/problems/generate-parentheses/

// my solution
// time: O(2^n), space: O(n)
// summary: use recursion and tracks opening and closing parentheses
var generateParenthesis = function (
  n,
  str = "",
  opened = 0,
  closed = 0,
  results = []
) {
  // base case: push it to the results array when it reaches the end
  if (n === opened && opened === closed) {
    results.push(str);
    return;
  }

  // add a closing parenthesis if there are unmatched opening parentheses
  if (opened > closed) {
    generateParenthesis(n, str + ")", opened, closed + 1, results);
  }

  // add an opening parenthesis if we haven't reached the limit
  if (opened < n) {
    generateParenthesis(n, str + "(", opened + 1, closed, results);
  }

  // return the results array after everything is finished
  return results;
};
