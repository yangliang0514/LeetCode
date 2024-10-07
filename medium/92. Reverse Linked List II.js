// https://leetcode.com/problems/reverse-linked-list-ii/

// my solution
// time: O(n), space: O(1)
// summary: extract reverse and link rest nodes logic to separate function (reuse a part of logic from leetcode 206.)
var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(null, head);
  let currentNode = dummy;
  let position = 0;

  // iterate to the node right before the node on position `left`
  while (position < left - 1) {
    currentNode = currentNode.next;
    position++;
  }
  // reverse the sublist from `left` to `right` and link back to the list
  currentNode.next = reverseAndLinkList(currentNode.next, right - left + 1);

  // return the head of the modified linked list
  return dummy.next;

  // ---------- HELPER FUNCTION BELOW ----------

  // this helper function reverses `count` nodes starting from `head`
  // and links the tail of the reversed list to the remaining nodes.
  // returns the new head of the reversed sublist.
  function reverseAndLinkList(head, count) {
    let prevNode = null;
    let currentNode = head;
    let nextNode = null;

    // iterate through `count` nodes and make a reversed linked list
    while (count > 0) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;

      currentNode = nextNode;
      count--;
    }

    // link `head` (which is the new tail), to the next node after this reversed list
    head.next = nextNode;
    // return the new head;
    return prevNode;
  }
};
