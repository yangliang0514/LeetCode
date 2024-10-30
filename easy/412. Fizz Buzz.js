// https://leetcode.com/problems/fizz-buzz/

// simple for loop solution
// time: O(n), space: O(n)
// summary: build a loop to build up the results
var fizzBuzz = function (n) {
  let results = [];

  for (let i = 1; i <= n; i++) {
    let str = "";
    // add fizz buzz if i can be divided by 3 or 5
    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    // push i if it doesn't match any of the previous conditions
    results.push(str);
  }

  return results;
};

// recursive solution
// time: O(n), space: O(n)
// sumamry: basically the same as above just using recursion
var fizzBuzz = function (n, count = 1, result = []) {
  // return the result when it reaches the end
  if (count === n + 1) return result;

  let str = "";

  if (count % 3 === 0) str += "Fizz";
  if (count % 5 === 0) str += "Buzz";

  result.push(str || count.toString());

  return fizzBuzz(n, count + 1, result);
};
