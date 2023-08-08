// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

// time: O(n), space: O(1)
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let index = 1;
  let twice = false; // to record if the number has appeared twice already

  for (let i = 1; i < nums.length; i++) {
    // when reaches the intersection of distinct numbers
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
      twice = false; // resets twice back to false
      continue;
    }

    // if the number hasn't appear twice yet
    if (!twice) {
      nums[index] = nums[i];
      index++;
      twice = true;
    }
  }
  return index;
};
