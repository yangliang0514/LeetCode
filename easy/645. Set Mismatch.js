// https://leetcode.com/problems/set-mismatch/description/

var findErrorNums = function (nums) {
  const correctSum = ((1 + nums.length) * nums.length) / 2;
  const numbers = {};
  let repeatedNum;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (numbers[nums[i]]) {
      repeatedNum = nums[i];
      continue;
    }
    numbers[nums[i]] = true;
    sum += nums[i];
  }

  return [repeatedNum, correctSum - sum];
};
