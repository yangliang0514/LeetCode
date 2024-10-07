// https://leetcode.com/problems/partition-list/

// my solution, seems to be optimal
// time: O(n), space: O(1)
// summary: make 2 list, one greater or equal to x and one less than x, then link them together
var partition = function (head, x) {
  // create a dummy head first
  const dummy = new ListNode(null, null);
  // a dummy for the greater list's head, because we need to link it to the tail of the lesser list
  const greaterHead = new ListNode(null, null);
  // tails are used for attaching nodes to the end
  let lesserTail = dummy;
  let greaterTail = greaterHead;
  let currentNode = head;

  // traverse through the list, when val >= x, attach it to the end of greater list
  // else attach it to the end of the lesser list
  while (currentNode) {
    if (currentNode.val >= x) {
      greaterTail.next = currentNode;
      greaterTail = greaterTail.next;
    } else {
      lesserTail.next = currentNode;
      lesserTail = lesserTail.next;
    }

    currentNode = currentNode.next;
  }

  // break everything after the last node
  greaterTail.next = null;
  // link the greater list to the lesser list
  lesserTail.next = greaterHead.next;
  return dummy.next;
};
