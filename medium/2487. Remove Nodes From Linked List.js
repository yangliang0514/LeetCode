// https://leetcode.com/problems/remove-nodes-from-linked-list/

// my solution
// time: O(n), space: O(n) -> due to the use of recursion
// summary: use recursion with an outside variable to record the larget val
var removeNodes = function (head) {
  // use a dummy node to simplify the process
  const dummy = new ListNode(0, head);

  // declare an outside variable to manage the largest val
  let largest = 0;
  // recursively handle the next nodes
  findNext(dummy);

  return dummy.next;

  // use recursion to return the next nodes
  function findNext(node) {
    // base case: return null when it reaches the end
    if (node === null) return null;

    // recursively calling the current function to return the next nodes
    node.next = findNext(node.next);

    // if the current node's value >= the largest at the moment
    // means the node should be kept, so return the current node
    if (node.val >= largest) {
      largest = node.val;
      return node;
    } else {
      // else, the node should be deleted, so return the next node
      return node.next;
    }
  }
};
