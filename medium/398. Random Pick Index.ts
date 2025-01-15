// https://leetcode.com/problems/random-pick-index

// simple solution
// time: O(n) for constructor and O(1) for pick, space: O(n)
// summary: use a map to store indexes of each number
class Solution {
  private map: Map<number, number[]>;

  constructor(nums: number[]) {
    // create a map
    this.map = new Map();
    // store indexes of each number into the map
    for (let i = 0; i < nums.length; i++) {
      if (this.map.has(nums[i])) {
        this.map.get(nums[i])?.push(i);
      } else {
        this.map.set(nums[i], [i]);
      }
    }
  }

  pick(target: number): number {
    // get a random element from the number's indexes
    const arr = this.map.get(target)!;
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

// Reservoir Sampling -> iterate through once with using extra memory
// time: O(1) for constructor and O(n) for pick, space: O(1)
class Solution2 {
  private nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  pick(target: number): number {
    let result = -1;
    let count = 0;

    // iterate through the list
    for (let i = 0; i < this.nums.length; i++) {
      // when the current num matches the target
      if (this.nums[i] === target) {
        // count the occurrence
        count++;

        // create a chance (using the count) for the newly found target to replace the old one
        if (Math.random() < 1 / count) {
          // replace the previous index with the new one
          result = i;
        }
      }
    }

    return result;
  }
}
