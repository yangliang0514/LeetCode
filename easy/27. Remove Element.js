// https://leetcode.com/problems/remove-element/description/

// time: O(n^2), space: O(1), the use of splice method itself is O(n)
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

// time: O(n), space: O(1)
// using a pointer
var removeElement = function (nums, val) {
  let pointer = 0;
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // if the current value is not the target value
    if (nums[i] !== val) {
      // assign the value to the current pointer
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  return pointer;
};
