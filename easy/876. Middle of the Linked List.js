// https://leetcode.com/problems/middle-of-the-linked-list/description/

// my solution
// time: O(n), space: O(1)
// summary: use a fast and slow pointer
var middleNode = function (head) {
  // decalre a fast and a slow pointer,
  // slow pointer will be at the middle when fast reaches the end
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
