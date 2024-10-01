// https://leetcode.com/problems/valid-palindrome-ii/

// my initial solution, using recursion
// time: O(n), space: O(n)
var validPalindrome = function (s) {
  // design a isPalindrome function which takes in 2-pointers
  // and a boolean to note has deleted a letter or not
  return isPalindrome(s, 0, s.length - 1, false);

  function isPalindrome(s, left, right, hasDeleted) {
    // using 2-pointer to check letters from the outside to the middle
    while (left < right) {
      // if letters don't match
      if (s[left] !== s[right]) {
        // if a letter is already deleted, not a palindrome
        if (hasDeleted) return false;

        // if hasn't deleted a letter,
        // there are 2 ways to continue checking, (left + 1 and right) or (left and right - 1)
        // check if either one is a palindrome, and pass in a letter has already been deleted
        return (
          isPalindrome(s, left, right - 1, true) ||
          isPalindrome(s, left + 1, right, true)
        );
      }
      left++;
      right--;
    }

    // if everything passes it should be a palindrome
    return true;
  }
};
