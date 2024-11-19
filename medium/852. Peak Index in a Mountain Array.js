// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// my solution
// time: O(log n), space: O(1)
// summary: use binary search to meet O(log n) requirement

var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // return `mid` index if the peak is found
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;

    // if middle element is less than the element to the right
    // mean we're on the left side of the peak, else on the right
    if (arr[mid] < arr[mid + 1]) {
      left = mid;
    } else {
      right = mid;
    }
  }
};
