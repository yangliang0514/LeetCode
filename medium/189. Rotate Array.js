// https://leetcode.com/problems/rotate-array/

// my solution, straightforward but not meeting the O(1) space requirement
// time: O(n), space: O(n)
var rotate = function (nums, k) {
  // if rotation goes over the length, it is the same as rotation % length
  k %= nums.length;
  // don't do anything if there's no rotation
  if (k === 0) return;

  let rotated = [];
  let currentIndex = nums.length - k;
  // build another array for rotated nums
  while (rotated.length < nums.length) {
    rotated.push(nums[currentIndex]);

    currentIndex = (currentIndex + 1) % nums.length;
  }
  // copy the rotated array to the nums array
  for (let i = 0; i < nums.length; i++) {
    nums[i] = rotated[i];
  }
};

// O(1) space solution,
// I have no idea why this works
// summary: reverse the entire array, then reverse the first k, then reverse the rest
var rotate = function (nums, k) {
  k %= nums.length;
  if (k === 0) return;

  reverse(nums);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(arr, left = 0, right = arr.length - 1) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
};
