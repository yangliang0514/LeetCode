// https://leetcode.com/problems/majority-element-ii/description/

// counter object
var majorityElement = function (nums) {
  const count = {};
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] + 1 || 1;
  }

  for (const key in count) {
    if (count[key] > nums.length / 3) {
      output.push(key);
      count[key] = null;
    }
  }
  return output;
};

// Boyer-Moore Majority Vote Algorithm
