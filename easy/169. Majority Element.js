// https://leetcode.com/problems/majority-element/description/

// Object Counter, time: O(n), space: O(n)
var majorityElement = function (nums) {
  const count = {};

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] + 1 || 1;
    if (count[nums[i]] > nums.length / 2) return nums[i];
  }
};

// Boyer-Moore Majority Vote Algorithm, time: O(n), space: O(1)
var majorityElement = function (nums) {
  let candidate = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) candidate = nums[i];
    nums[i] === candidate ? count++ : count--;
  }

  return candidate;
};
