// https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function (nums) {
  const count = {};

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) return true;
    count[nums[i]] = true;
  }
  return false;
};
