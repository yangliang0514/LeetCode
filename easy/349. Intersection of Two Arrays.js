// https://leetcode.com/problems/intersection-of-two-arrays/description/

var intersection = function (nums1, nums2) {
  const count = {};
  const output = [];

  for (let i = 0; i < nums1.length; i++) {
    count[nums1[i]] ||= true;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!count[nums2[i]]) continue;
    output.push(nums2[i]);
    count[nums2[i]] = null;
  }

  return output;
};
