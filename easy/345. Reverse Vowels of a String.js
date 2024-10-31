// https://leetcode.com/problems/reverse-vowels-of-a-string/

// my solution
// time: O(n), space: O(n), space is n because we can't modify string in-place in JS
// summary: use 2-pointers and swap characters when both pointers are vowels
var reverseVowels = function (s) {
  let strArr = s.split("");

  let left = 0;
  let right = s.length - 1;

  const vowels = new Set("aeiouAEIOU");

  while (left < right) {
    if (!vowels.has(strArr[left])) {
      left++;
      continue;
    }

    if (!vowels.has(strArr[right])) {
      right--;
      continue;
    }
    // swap 2 vowels
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];

    left++;
    right--;
  }

  return strArr.join("");
};
