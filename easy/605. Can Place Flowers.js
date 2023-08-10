// https://leetcode.com/problems/can-place-flowers/description/

// time: O(n), space: O(1)
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    // check if the current position is a valid place to plant a flower
    if (flowerbed[i] == 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      i++; // if the current position is valid, the next won't be, so skip an iteration
      n--; // decrement the count of flowers left to be planted
    }
  }
  return n <= 0; // if there are no flowers left to be planted, n will be valid
};

// refactored solution, not sure if it's better or worse though
// probably faster? since there are fewer conditions to check for
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    // if the current position is already planted, skip an iteration
    if (flowerbed[i] === 1) {
      i++;
      continue;
    }
    // if the current position is empty and the next is also empty, it's a valid position
    if (flowerbed[i + 1] !== 1) {
      i++;
      n--;
    }
  }
  return n <= 0;
};
