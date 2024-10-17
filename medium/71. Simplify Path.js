// https://leetcode.com/problems/simplify-path/

// time: O(n), space: O(n)
// summary: use a stack to record directories
var simplifyPath = function (path) {
  let stack = [];
  // the current directory name
  let current = "";
  // loop through the path
  for (let i = 0; i <= path.length; i++) {
    // if there is a character and it is not a slash, add it to current to keep building dir name
    if (path[i] && path[i] !== "/") {
      current += path[i];
      continue;
    }
    // if current == "..", means go out one directory, so pop the last dir out of the stack
    if (current === "..") {
      stack.pop();
      // else if it is not empty (//) or indicates the current dir (/./), push current dir to the stack
    } else if (current !== "" && current !== ".") {
      stack.push(current);
    }
    // reset the current dir name
    current = "";
  }
  // join the new path and add "/" to the front
  return "/" + stack.join("/");
};
