// https://leetcode.com/problems/third-maximum-number/

// my solution, trying for a O(n) solution
// time: O(n), space: O(1)
// summary: use an array to track the 3 largest numbers (seems too complicated and unreadable)
var thirdMax = function (nums) {
  let maxNums = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    switch (true) {
      case nums[i] > maxNums[maxNums.length - 1]:
        maxNums.push(nums[i]);
        if (maxNums.length > 3) maxNums.shift();
        break;
      case nums[i] < maxNums[0] && maxNums.length < 3:
        maxNums.unshift(nums[i]);
        break;
      case nums[i] > maxNums[0] && nums[i] < maxNums[maxNums.length - 1]:
        if (maxNums.length < 3) {
          maxNums.push(nums[i]);
          [maxNums[maxNums.length - 1], maxNums[maxNums.length - 2]] = [
            maxNums[maxNums.length - 2],
            maxNums[maxNums.length - 1],
          ];
        } else if (nums[i] > maxNums[1]) {
          maxNums[0] = nums[i];
          [maxNums[0], maxNums[1]] = [maxNums[1], maxNums[0]];
        } else if (nums[i] < maxNums[1]) {
          maxNums[0] = nums[i];
        }
    }
  }

  return maxNums.length < 3 ? maxNums[maxNums.length - 1] : maxNums[0];
};

// second attempt, trying to make it cleaner
// time: O(n), space: O(1)
// summary: use 3 variables instead of an array
var thirdMax = function (nums) {
  // first is the smallest of the three, and third is the largest
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;

  for (const num of nums) {
    // if num if the largest of the three, it should be the new third
    if (num > third) {
      [first, second, third] = [second, third, num];
    } else if (num > second && num !== third) {
      // if num is larger than second and not equal to third, it shoud be the new second
      [first, second] = [second, num];
    } else if (num < second && num > first) {
      // if num is smaller than first, it should be the new first
      first = num;
    }
  }

  return first === -Infinity ? third : first;
};
