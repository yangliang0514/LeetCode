// https://leetcode.com/problems/longest-consecutive-sequence/

// my initial solution, messy but works, the map takes a lot of memory
// time: O(n), space: O(n)
var longestConsecutive = function (nums) {
  let map = new Map(); // store checked numbers and it's sequence length
  let longest = 0; // track the longest sequence length

  for (let i = 0; i < nums.length; i++) {
    // skip duplicate numbers
    if (map.has(nums[i])) continue;

    // check how many consecutive numbers exist on both sides
    const prevCount = map.get(nums[i] - 1) || 0;
    const nextCount = map.get(nums[i] + 1) || 0;
    const combined = prevCount + nextCount + 1;

    // mark the current number as processed by adding it to the map
    // since it could be in the middle of a squence here, the value doesn't matter
    // numbers inside a sequence couldn't form a larger sequence
    map.set(nums[i], 0);

    // updates the outer boundary of the sequence
    // like linking the sequence together
    // only the count on the out boundary matter since you can only extend from here
    map.set(nums[i] - prevCount, combined);
    map.set(nums[i] + nextCount, combined);

    // update the longest sequence found
    longest = Math.max(combined, longest);
  }

  return longest;
};

// Set approach, seems to have similar performance, but a lot simpler
// even though there's a while loop inside a for loop
// each element in the set is looped through twice, so it's still O(n) time
// time: O(n), space: O(n)
var longestConsecutive = function (nums) {
  const numsSet = new Set(nums);
  let longest = 0;

  // loop through the set
  for (let num of numsSet) {
    // find the first number in a sequence
    if (numsSet.has(num - 1)) continue;

    let count = 1;
    let currNum = num;

    // start counting to the last number in the sequence
    while (numsSet.has(currNum + 1)) {
      count++;
      currNum++;
    }

    // update the longest squence number
    longest = Math.max(count, longest);
  }

  return longest;
};
