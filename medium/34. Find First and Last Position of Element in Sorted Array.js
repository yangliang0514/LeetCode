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
