// https://leetcode.com/problems/container-with-most-water/

// brute force solution, trying every combination
// time: O(n^2), exceeding time limit in leetcode
var maxArea = function (height) {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 1; j < height.length; j++) {
      const area = (j - i) * Math.min(height[j], height[i]);
      maxArea = Math.max(area, maxArea);
    }
  }
  return maxArea;
};

// 2-pointer, time: O(n), space: O(1)
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // update the maxArea if the current area is larger
    maxArea = Math.max(
      Math.min(height[left], height[right]) * (right - left),
      maxArea
    );

    // move the pointer with the smaller height,
    // since the area depends on the minimun height of the two pointers,
    // moving the smaller pointer is the only possible way to find a larger area
    if (height[left] < height[right]) {
      left++;
      continue;
    }
    right--;
  }
  return maxArea;
};
