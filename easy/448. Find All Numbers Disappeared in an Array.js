// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// initial solution, simple one, but not meeting the follow up requirement
// time: O(n), space: O(n)
// summary: turn into a set first, and push the missing numbers to the result array
var findDisappearedNumbers = function (nums) {
  const set = new Set(nums);
  let results = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) results.push(i);
  }

  return results;
};

// second attempt
// time: O(n), space: O(1)
// summary: modify the array to record what number has appeared, basically maps a number to an index
var findDisappearedNumbers = function (nums) {
  let results = [];
  // switch the number's corresponding index to a negative number
  // e.g. when we found the number 1, set nums[0] to -nums[0]
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) nums[index] = -nums[index];
  }
  // loop again to find the positive number and push the corresponding index + 1 to the result list
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) results.push(i + 1);
  }

  return results;
};
