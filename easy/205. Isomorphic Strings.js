// https://leetcode.com/problems/isomorphic-strings/

// time: O(n), space: O(n)
var isIsomorphic = function (s, t) {
  // bind letters in 2 string in both ways
  let mapS = {};
  let mapT = {};

  for (let i = 0; i < s.length; i++) {
    // bind letters if i wasn't binded yet
    if (mapS[s[i]] === undefined) mapS[s[i]] = t[i];
    if (mapT[t[i]] === undefined) mapT[t[i]] = s[i];

    // return false if one of the bindings don't match
    if (mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]) return false;
  }

  return true;
};
