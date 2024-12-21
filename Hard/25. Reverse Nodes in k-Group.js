// https://leetcode.com/problems/reverse-nodes-in-k-group/

// my solution
// time: O(n), space: O(n) -> due to recursion
// summary: use a recursive approach that reverses k nodes at a time, then recurse to the next iteration
var reverseKGroup = function (head, k) {
  // base case, when there is no nodes left
  if (head === null) return head;

  let times = k;
  let prev = null;
  let current = head;
  let next = head.next;

  // reverse k nodes in the while loop
  while (times > 0) {
    // if there isn't enough nodes (less than k nodes) to be reversed
    // reverse the already reversed nodes back to the original order
    if (current === null) return reverseKGroup(prev, k - times);

    // swap the nodes
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;

    times--;
  }

  // head is the last element of the reversed k nodes
  // recursive on to the next k nodes
  head.next = reverseKGroup(next, k);
  // return the new head
  return prev;
};
