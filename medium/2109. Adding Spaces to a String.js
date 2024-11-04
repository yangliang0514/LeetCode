// https://leetcode.com/problems/adding-spaces-to-a-string/

// my solution
// time: O(n), space: O(n)
// summary: loop through each character and build up the result string
var addSpaces = function (s, spaces) {
  let answer = "";
  let spaceIndex = 0;
  // loop through the string and add a space when encounters the target index
  for (let i = 0; i < s.length; i++) {
    if (i === spaces[spaceIndex]) {
      answer += " " + s[i];
      spaceIndex++;
    } else {
      answer += s[i];
    }
  }

  return answer;
};

// second attempt
// time: O(n + m), space: O(n)
// summary: split the sentence into an array first, then modify it in-place
var addSpaces = function (s, spaces) {
  // split he sentence into an array
  let answer = s.split("");
  // iterate through the spaces array and modify the answer array in place
  for (let i = 0; i < spaces.length; i++) {
    answer[spaces[i]] = " " + answer[spaces[i]];
  }
  // join the array to return the answer as a string
  return answer.join("");
};
