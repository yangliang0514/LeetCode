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
