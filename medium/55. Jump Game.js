// https://leetcode.com/problems/jump-game/

// my initial solution (inefficient) -> time limit exceeded
// time: O(2^n), space: O(n)
// summary: use recursion to find all possible jumps
var canJump = function (nums, index = 0) {
  // return true when reached the end
  if (index === nums.length - 1) return true;

  // loop through each index, return true if there's one that can reach the end
  for (let i = 1; i <= nums[index]; i++) {
    if (canJump(nums, index + i)) return true;
  }

  return false;
};

// second attempt -> add memoization
// time: O(2^n), space: O(n)
// summary: same approach but added memoization, won't exceed time limit but still really inefficient
var canJump = function (nums, index = 0, memo = {}) {
  if (index === nums.length - 1) return true;
  // use the memoized result instead of re-evaluate each time
  if (memo[index] !== undefined) return memo[index];

  for (let i = 1; i <= nums[index]; i++) {
    if (canJump(nums, index + i, memo)) {
      // set the memo
      memo[index] = true;
      return true;
    }
  }

  memo[index] = false;
  return false;
};

// optimal solution
// time: O(n), space: O(1)
// summary: iterate through the array to count the max reachable index
var canJump = function (nums) {
  // use a variable to store the furthest reachable index
  let reachableIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    // if the current index is beyond the reachable index, return false
    if (i > reachableIndex) return false;
    // update the reachable index
    reachableIndex = Math.max(reachableIndex, i + nums[i]);
    // if reachable index is beyond the length of the array, means it can reach the end
    if (reachableIndex >= nums.length - 1) return true;
  }

  return false;
};
