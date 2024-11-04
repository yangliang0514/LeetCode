// https://leetcode.com/problems/detect-capital/

// my solution
// time: O(n), space: O(1)
// summary: check  if the first and second letter is capitalized, then evaluate accordingly
var detectCapitalUse = function (word) {
  if (word.length === 1) return true;

  // check the first 2 letters
  const firstCap = isCapital(word[0]);
  const secondCap = isCapital(word[1]);

  // return false if the first letter is cap and the second isn't
  if (!firstCap && secondCap) return false;

  for (let i = 2; i < word.length; i++) {
    const isCharCapital = isCapital(word[i]);

    // check according to the first 2 letters
    if (firstCap && secondCap) {
      if (!isCharCapital) return false;
    } else {
      if (isCharCapital) return false;
    }
  }
  // return true is there is no invalid letter found
  return true;

  function isCapital(char) {
    const code = char.charCodeAt();
    return code >= 65 && code <= 90;
  }
};
