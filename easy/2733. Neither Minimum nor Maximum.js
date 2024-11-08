// https://leetcode.com/problems/neither-minimum-nor-maximum/

// my solution (stupid soltuon, don't need to find the actual min and max)
// time: O(n), space: O(1)
// summary: loop through once to find the min and max, then find any number that's either of those
var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;

  let min = nums[0] > nums[1] ? nums[1] : nums[0];
  let max = nums[0] > nums[1] ? nums[0] : nums[1];

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      continue;
    }

    if (nums[i] < min) {
      min = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== min && nums[i] !== max) return nums[i];
  }
};

// second attempt
// time: O(1), space: O(1)
// summary: finds any 3 number is the array, and return the middle one
var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) return -1;

  return nums.slice(0, 3).sort((a, b) => a - b)[1];
};
