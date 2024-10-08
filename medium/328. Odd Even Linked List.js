// https://leetcode.com/problems/odd-even-linked-list/

// my solution, probably don't need a dummy nodes
// time: O(n), space: O(1)
// summary: create 2 lists then link them together
var oddEvenList = function (head) {
  // create a dummy node for both lists
  const oddDummy = new ListNode(null, head);
  const evenDummy = new ListNode(null, null);

  let oddTail = oddDummy;
  let evenTail = evenDummy;
  let currentNode = head;

  // iterate through and link odd and even nodes to their respective lists
  while (currentNode) {
    oddTail.next = currentNode;
    evenTail.next = currentNode.next;

    oddTail = oddTail.next;
    evenTail = evenTail.next;

    // move current node 2 steps ahead
    currentNode = currentNode.next ? currentNode.next.next : null;
  }

  // link 2 lists together
  oddTail.next = evenDummy.next;
  // return the head
  return oddDummy.next;
};

// eliminates the dummy nodes, more concise
var oddEvenList = function (head) {
  // return null if there is no head
  if (!head) return null;

  let oddTail = head;
  let evenTail = head.next;
  let evenHead = evenTail;

  while (evenTail && evenTail.next) {
    // link odd node to odd list
    oddTail.next = evenTail.next;
    // link even node to even list
    evenTail.next = evenTail.next.next;

    oddTail = oddTail.next;
    evenTail = evenTail.next;
  }
  // link 2 lists together
  oddTail.next = evenHead;

  return head;
};
