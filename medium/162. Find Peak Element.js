// https://leetcode.com/problems/find-peak-element/

// first attempt, not meeting O(log n) time requirement
// time: O(n), space: O(1)
// summary: loop through the entire array to find the first peak element
var findPeakElement = function (nums) {
  // check is the first element a peak element
  if (nums[0] > nums[1] || nums.length === 1) return 0;

  // check is the last element a peak element
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  // loop through to find the first peak element in the middle
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
  }
  // return -1 if nothing is found
  return -1;
};

// second attempt, use binary search
// time: O(log n), space: O(1)
// summary: use binary search to start with middle element,
//          if the right neighbor of the middle element is greater, there must be a peak on the right side and vice versa
var findPeakElement = function (nums) {
  // check the first and the last element first
  if (nums.length === 1 || nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  // set up 2-pointers for binary search
  let left = 0;
  let right = nums.length - 1;

  // use binary search to eliminate half at a time
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // return middle index when middle element is a peak
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;

    // if middle is not a peak,
    // check if right neighbor is greater, there must be a peak on the right, else on the left
    if (nums[mid + 1] > nums[mid]) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return -1;
};
