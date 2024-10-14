// https://leetcode.com/problems/reverse-string-ii/

// my solution
// time: O(n), space: O(1)
// summary: loop through the list,
var reverseStr = function (s, k) {
  let result = "";
  let need_reverse = true;
  let start = 0;
  let end = k - 1 > s.length - 1 ? s.length - 1 : k - 1;

  while (end <= s.length - 1) {
    // only reverse string if this iteration needs to be reversed
    if (need_reverse) {
      result += reverse(start, end);
    } else {
      result += s.slice(start, end + 1);
    }
    // stop the loop if the end index reaches the end
    if (end === s.length - 1) break;
    // update pointers and boolean to determine reverse or not
    need_reverse = !need_reverse;
    start += k;
    end = end + k >= s.length - 1 ? s.length - 1 : end + k;
  }

  return result;

  // ---------- HELPER FUNCTION ----------
  // return a reversed string from startIndex and endIndex
  function reverse(startIndex, endIndex) {
    let reversedStr = "";
    while (endIndex >= startIndex) {
      reversedStr += s[endIndex];
      endIndex--;
    }
    return reversedStr;
  }
};
