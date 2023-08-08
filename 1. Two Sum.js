// https://leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) {
  const numbers = {};

  for (let i = 0; i < nums.length; i++) {
    // check if the difference between current number to the target exists
    if (numbers[target - nums[i]] !== undefined) {
      return [numbers[target - nums[i]], i];
    }
    // builds up the numbers object along the way
    numbers[nums[i]] = i;
  }
};
