// https://leetcode.com/problems/majority-element/description/

var majorityElement = function (nums) {
  const count = {};

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] + 1 || 1;
    if (count[nums[i]] > nums.length / 2) return nums[i];
  }
};
