// https://leetcode.com/problems/find-the-difference/description/

var findTheDifference = function (s, t) {
  const count = {};

  for (let i = 0; i < s.length; i++) {
    count[s[i]] = count[s[i]] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (count[t[i]] === undefined || --count[t[i]] < 0) return t[i];
  }
};
