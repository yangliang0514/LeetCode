// https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  const expectedSum = ((1 + nums.length) * nums.length) / 2;

  return expectedSum - sum;
};
