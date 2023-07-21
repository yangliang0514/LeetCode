// https://leetcode.com/problems/sqrtx/description/

var mySqrt = function (x) {
  let start = 1;
  let end = x;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (mid ** 2 === x) return mid;
    if (mid ** 2 < x) start = mid + 1;
    if (mid ** 2 > x) end = mid;
  }

  // if x == 0 or x == 1, the square root of x == x
  return x < 2 ? x : end - 1;
};
