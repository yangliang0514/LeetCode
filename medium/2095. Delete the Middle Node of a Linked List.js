// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

// my solution
// time: O(n), space: O(1)
// summary: set 2-pointers, one slow pointer (1 step at a time) one fast pointer (2 steps at a time)
var deleteMiddle = function (head) {
  const dummy = new ListNode(null, head);
  // slow pointer starts at a dummy pointer before the head
  // fast pointer starts on the head
  let slow = dummy;
  let fast = head;
  // move the 2 pointers
  // when fast pointer reached the last node, slow pointer will be on the node before the node to be deleted
  while (fast && fast.next) {
    fast = fast.next;
    fast = fast.next;
    slow = slow.next;
  }
  // skip the node to be deleted
  slow.next = slow.next.next;

  return dummy.next;
};
