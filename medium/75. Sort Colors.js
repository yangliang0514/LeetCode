// https://leetcode.com/problems/sort-colors/description/

// Bubble sort
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1])
        [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
    }
  }
};

// O(n) solution
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
    }

    if (nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
      i--;
    }
  }
};
