// https://leetcode.com/problems/single-element-in-a-sorted-array/

// first attempt, not meeting O(log n) requirement
// time: O(n), space: O(1)
// summary: loop through the array to find of one element does not equal to the next
var singleNonDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) return nums[i];
    i++;
  }
};

// second attempt
// time: O(log n), space: O(1)
// summary: even index should === the element on the right, if not, means we've already passed the single element
var singleNonDuplicate = function (nums) {
  // handle the edge cases first, when there is only one element or either the first or last element is the single element
  if (nums.length === 1 || nums[0] !== nums[1]) return nums[0];
  if (nums[nums.length - 1] !== nums[nums.length - 2]) {
    return nums[nums.length - 1];
  }
  // use 2-pointer and binary search
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // find the mid point
    const mid = Math.floor((left + right) / 2);
    // return if the mid element is the single number
    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      return nums[mid];
    }
    // if `mid` is even and the mid element does not equal to the element to the right,
    // or if `mid` is odd and the mid element does not equal to the element to the left
    // means the single element is on the left side of mid, so eliminates the right part
    if (
      (mid % 2 === 0 && nums[mid + 1] !== nums[mid]) ||
      (mid % 2 === 1 && nums[mid] !== nums[mid - 1])
    ) {
      right = mid;
    } else {
      // else eliminates the left part
      left = mid;
    }
  }
};
