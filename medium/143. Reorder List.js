// https://leetcode.com/problems/reorder-list/

// my solution
// time: O(n), space: O(1)
// summary: find the middle or the noe before the middle, reverse the second half, and make the new list
var reorderList = function (head) {
  if (head.next === null) return head;

  let slow = head;
  let fast = head.next;
  // find the middle point of the list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // break up the first half and the second half
  let secondHalf = slow.next;
  slow.next = null;
  // get the head of the first half and the reversed second half
  let current = head;
  let reversed = reverse(secondHalf);
  // loop through both lists, and link them together
  while (current) {
    const nextCurrent = current.next;
    const nextReversed = reversed && reversed.next;

    current.next = reversed;
    if (reversed) reversed.next = nextCurrent;

    current = nextCurrent;
    reversed = nextReversed;
  }
  // return the new list
  return head;

  function reverse(node, prevNode = null) {
    if (node === null) return prevNode;
    const nextNode = node.next;
    node.next = prevNode;
    return reverse(nextNode, node);
  }
};
