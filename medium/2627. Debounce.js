// https://leetcode.com/problems/debounce/

// simple solution
// time: O(1), space: O(1)
// summary: use setTimeout and closure
var debounce = function (fn, t) {
  // stores a timeout id
  let timeout;
  // returns a function that clears the previous timeout and sets another timeout when it is called
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  };
};
