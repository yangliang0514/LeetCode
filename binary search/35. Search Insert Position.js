// https://leetcode.com/problems/search-insert-position/description/

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) return middle;
    if (nums[middle] < target) start = middle + 1;
    if (nums[middle] > target) end = middle - 1;
  }

  return nums[start] >= target ? start : start + 1;
};
