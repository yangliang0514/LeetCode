// https://leetcode.com/problems/rotate-string/

// my solution
// time: O(n), space: O(1)
// summary: double the string, so goal will be s substring, then loop through to find the substring
var rotateString = function (s, goal) {
  // it won't match if the length don't match
  if (s.length !== goal.length) return false;

  // double the string so `goal` will be a substring
  s += s;

  // loop through to find the substring
  outer: for (let i = 0; i < s.length; i++) {
    // if the first string matches, start the loop to find a match
    if (s[i] === goal[0]) {
      for (let j = 1; j < goal.length; j++) {
        if (s[i + j] === goal[j]) continue;
        // if one letter doesn't match, continue the outer loop to try to find the substring again
        continue outer;
      }
      // if it reaches here, mean the `goal` is found
      return true;
    }
  }

  return false;
};
