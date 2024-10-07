// https://leetcode.com/problems/reverse-linked-list/

// my solution (straightforward)
// time: O(n), space: O(1)
var reverseList = function (head) {
  let prevNode = null;
  let currentNode = head;
  let nextNode = null;

  // iterate through the list, the new next node should be the previous node in iteration
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;

    currentNode = nextNode;
  }

  // return the previous node, which should be the last node in the list
  return prevNode;
};
