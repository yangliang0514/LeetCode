// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

// my solution
// time: O(n), space: O(1)
// summary: use 2-pointers and create a gap of k - 1, iterate through to find the target nodes
//          (only required to only switch the `values` not the `nodes`)
var swapNodes = function (head, k) {
  // use 2-pointers to traverse the list
  let slow = head;
  let fast = head;

  // creates a gap of k - 1 between 2 nodes
  while (k - 1 > 0) {
    fast = fast.next;
    k--;
  }

  // at this point, the slow pointer is at the head
  // and the fast pointer is k - 1 nodes after the slow pointer, which makes it the kth node
  let first = fast;

  // move both pointers forward until the fast pointer reaches the tail
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // at this point, the fast pointer is at the tail of the list
  // and the slow pointer is k - 1 nodes before the fast pointer
  // which makes it the kth node from the end
  let last = slow;

  // swap the values of the 2 nodes
  [first.val, last.val] = [last.val, first.val];

  // return the updated list
  return head;
};
