// https://leetcode.com/problems/clumsy-factorial/

// my solution
// time: O(n), space: O(1)
// summary: put the multiplication and division parts into a function, then calculate the answer
var clumsy = function (n) {
  // initialize the answer with the first multiplication and division result
  // since it's the only time that it should be added
  let answer = multDiv();

  // loop through to add and subtract the remaining numbers
  while (n >= 1) {
    answer += n--; // add the current number
    answer -= multDiv(); // subtract the result of the multiplication and division
  }

  return answer;

  // ---------- HELPER FUNCTION ----------
  // since only the division and multiplication parts should be calculated first,
  // wrap them into a function and directly mutate the `n` variable
  function multDiv() {
    if (n < 1) return 0;

    let result = n--;

    if (n >= 1) result *= n--;
    if (n >= 1) result = Math.floor(result / n--);

    return result;
  }
};
