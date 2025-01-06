// https://leetcode.com/problems/trapping-rain-water/

// classic solution (can't figure this out on my own)
// time: O(n), space: O(1)
// summary: 2-pointers approach
var trap = function (height) {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let sum = 0;

  while (left < right) {
    // to determine which part can trap water
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        // update the max value
        leftMax = height[left];
      } else {
        // if the current value is smaller than the max
        // there is a space for water to be trapped
        // so add it to the sum
        sum += leftMax - height[left];
      }
      left++;
    } else {
      // same as above but the other way around
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        sum += rightMax - height[right];
      }
      right--;
    }
  }

  return sum;
};
