// https://leetcode.com/problems/remove-linked-list-elements/

// my solution
// time: O(n), space: O(1)
// summary: skip nodes that node.val == val
var removeElements = function (head, val) {
  const dummy = new ListNode(null, head);
  let currentNode = dummy;
  // iterate through the list
  while (currentNode) {
    // skip next node if next node.val == val
    if (currentNode.next && currentNode.next.val === val) {
      currentNode.next = currentNode.next.next;
      continue;
    }

    currentNode = currentNode.next;
  }

  return dummy.next;
};

// recursive solution
// time: O(n), space: O(n)
// summary: use recursion to recursively add or skip nodes
var removeElements = function (head, val) {
  // base case, return null if there's no head
  if (!head) return null;
  // recursively handle next nodes
  head.next = removeElements(head.next, val);
  // determine what nodes should be returned
  // if node.val == val return the next node
  return head.val === val ? head.next : head;
};
