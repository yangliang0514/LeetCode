// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// time: O(n), space: O(1)
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  // the index of element getting manipulated,
  // start with 1 as the first element will never have to be changed
  let index = 1;

  // loop through the array to find the intersection of distinct numbers
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
};
