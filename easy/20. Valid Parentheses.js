// https://leetcode.com/problems/valid-parentheses/

// my solution
// time: O(n), space: O(n)
// summary: use array to simulate a stack,
var isValid = function (s) {
  const parenthMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // push when it is an opening parenthese
    if (!parenthMap[s[i]]) {
      stack.push(s[i]);
      continue;
    }
    // if it is a closing parenthese and matches the last one, pop it off
    if (stack[stack.length - 1] === parenthMap[s[i]]) {
      stack.pop();
      continue;
    }
    // return false when there's a closing parenthese and doesn't match the last one
    return false;
  }

  return stack.length === 0;
};
