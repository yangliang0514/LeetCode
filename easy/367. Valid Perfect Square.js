// https://leetcode.com/problems/valid-perfect-square/description/

var isPerfectSquare = function (num) {
  let start = 1;
  let end = num;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (mid ** 2 === num) return true;
    if (mid ** 2 > num) end = mid;
    if (mid ** 2 < num) start = mid + 1;
  }

  // only when num == 1, the square root of 1 equals 1
  return num === 1;
};
