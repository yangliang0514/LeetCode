// https://leetcode.com/problems/promise-time-limit/

// my solution
// summary: creates a timeout and try to resolve the passed in async function
var timeLimit = function (fn, t) {
  return async function (...args) {
    // returns an outer promise
    return new Promise((res, rej) => {
      // set a timeout that rejects the outer promise after t milliseconds
      setTimeout(() => rej("Time Limit Exceeded"), t);
      // resolves or rejects the outer promise as soon as this one resolves or rejects
      fn(...args)
        .then(res)
        .catch(rej);
    });
  };
};

var timeLimit = function (fn, t) {
  return async function (...args) {
    // use Promise.race to return whoever resolves or rejects first
    return Promise.race([
      new Promise((_, rej) => setTimeout(() => rej("Time Limit Exceeded"), t)), // rejects this promise after t milliseconds
      fn(...args), // this returns a promise since it's an async function
    ]);
  };
};
