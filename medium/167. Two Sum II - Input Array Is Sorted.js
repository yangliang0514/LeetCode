// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// 2-pointer solution
// time: O(n), space: O(1)
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) return [left + 1, right + 1];
    if (sum > target) {
      right--;
      continue;
    }

    left++;
  }
};
