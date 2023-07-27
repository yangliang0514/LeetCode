// https://leetcode.com/problems/sort-colors/description/

// Bubble sort
var sortColors = function (nums) {
  if (nums.length <= 1) return nums;
  const midPoint = Math.floor(nums.length / 2);
  const leftArr = sortColors(nums.slice(0, midPoint));
  const rightArr = sortColors(nums.slice(midPoint));

  return merge(leftArr, rightArr);

  function merge(arr1, arr2) {
    const result = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length && pointer2 < arr2.length) {
      if (arr1[pointer1] < arr2[pointer2]) {
        result.push(arr1[pointer1]);
        pointer1++;
        continue;
      }

      result.push(arr2[pointer2]);
      pointer2++;
    }

    while (pointer1 < arr1.length) {
      result.push(arr1[pointer1]);
      pointer1++;
    }

    while (pointer2 < arr2.length) {
      result.push(arr2[pointer2]);
      pointer2++;
    }

    return result;
  }
};

// O(n) solution
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
    }

    if (nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
      i--;
    }
  }
};
