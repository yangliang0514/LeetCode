// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// linear search, not meeting the required O(log n) standard, time: O(n)
var searchRange = function (nums, target) {
  let start;

  // loop through the array to one after the last element
  for (let i = 0; i <= nums.length; i++) {
    // finds the first apperance of the target
    if (nums[i] === target && start === undefined) {
      start = i;
      continue;
    }
    // finds the first element that's not the target
    if (nums[i] !== target && start !== undefined) return [start, i - 1];
  }
  // return -1 if the target is not found
  return [-1, -1];
};

// double binary search with left and right bias
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let start = -1;
  let end = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) left = mid + 1;
    if (nums[mid] >= target) right = mid - 1;
  }
  if (nums[left] === target) start = left;

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) left = mid + 1;
    if (nums[mid] > target) right = mid - 1;
  }

  if (nums[right] === target) end = right;

  return [start, end];
};
