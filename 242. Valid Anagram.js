// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const counter = {};

  for (let i = 0; i < s.length; i++) {
    counter[s[i]] = counter[s[i]] ? counter[s[i]] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    // if the letter is not in the counter object (undefined)
    // or the count is 0, means we have a letter that does not match
    if (!counter[t[i]]) return false;
    counter[t[i]] -= 1;
  }

  return true;
};
