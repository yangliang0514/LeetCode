// https://leetcode.com/problems/word-pattern/

// my solution
// time: O(n + m), space: O(n)
// summary: using 2 hash maps to record bindings, and iterate through the pattern while building up corresponding word
var wordPattern = function (pattern, s) {
  // create 2 maps to bind both ways
  const patternMap = new Map();
  const sMap = new Map();
  // current index in the string
  let sIndex = 0;
  // iterate through the pattern
  for (let i = 0; i < pattern.length; i++) {
    let word = "";
    // build up the word in `s`
    // the index will end up on a " " or one after the last character (sIndex === s.length)
    while (s[sIndex] && s[sIndex] !== " ") {
      word += s[sIndex];
      sIndex++;
    }

    // add the binding to both maps if it hasn't been added
    if (!patternMap.has(pattern[i])) patternMap.set(pattern[i], word);
    if (!sMap.has(word)) sMap.set(word, pattern[i]);
    // compare if the bindings match, return false if it doesn't match
    if (patternMap.get(pattern[i]) !== word || sMap.get(word) !== pattern[i]) {
      return false;
    }
    // add the index once more
    // so it will end up on the starting character of the next word
    // or two after the last character in `s`
    sIndex++;
  }
  // check if the index is exactly 2 after the last character (index should == index of the last character + 2)
  // if not, means `s` and the pattern don't match in length
  return sIndex === s.length + 1;
};
