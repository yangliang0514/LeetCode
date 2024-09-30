// https://leetcode.com/problems/contains-duplicate-ii/

// my initial solution: using a map, not as efficient in memory
// time: O(n), space: O(n)
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // return true if the current number has occured and within range
    if (map.has(nums[i]) && map.get(nums[i]) >= i - k) {
      return true;
    }
    // set the index to the current
    // when current number is either not appeared or out of range
    map.set(nums[i], i);
  }

  // never found any duplicate number within range
  return false;
};

// better solution, using a set
// time: O(n), space: O(k), with k == the range
var containsNearbyDuplicate = function (nums, k) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    // return true if current number is within the set
    if (set.has(nums[i])) return true;
    // if not, add the current number to the set
    set.add(nums[i]);
    // keep the set in the size of k
    if (set.size > k) set.delete(nums[i - k]);
  }
  return false;
};
