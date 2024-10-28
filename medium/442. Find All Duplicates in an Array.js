// https://leetcode.com/problems/find-all-duplicates-in-an-array/

// my solution
// time: O(n), space: O(1)
// summary: similar to Problem 448, when a number is found, turn nums[number - 1] to negative
var findDuplicates = function (nums) {
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    // calc the corresponding index
    const index = Math.abs(nums[i]) - 1;
    // if the value > 0, means it hasn't appeared yet, so turn it into negative
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    } else {
      // if it is negative, mean it has appeared, so push it to the results array
      results.push(index + 1);
    }
  }

  return results;
};
