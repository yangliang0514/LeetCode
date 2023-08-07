// https://leetcode.com/problems/first-bad-version/description/

var solution = function (isBadVersion) {
  return function (n) {
    let start = 1;
    let end = n;

    while (start < end) {
      const middle = Math.floor((start + end) / 2);

      if (isBadVersion(middle)) {
        end = middle;
      } else {
        start = middle + 1;
      }
    }

    return start;
  };
};
