// https://leetcode.com/problems/linked-list-cycle-ii/

// my solution, the only solution I can think of, not meeting O(1) space requirement
// time: O(n), space: O(n)
// summary: store each node that has appeared in a set
var detectCycle = function (head) {
  let set = new Set();
  let currentNode = head;

  while (currentNode) {
    // return the current node if it has appeared before
    if (set.has(currentNode)) return currentNode;
    set.add(currentNode);

    currentNode = currentNode.next;
  }

  return null;
};

// optimal solution, I can't really understand why...
// time: O(n), space: O(1)
function detectCycle(head) {
  if (!head || !head.next) return null;

  // use a slow pointer and a fast pointer
  let slow = head;
  let fast = head;

  // move both pointers to the end or when they meet in the cycle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }
  // return null if there is no cycle
  if (!fast || !fast.next) return null;

  // move the slow pointer back to the head
  slow = head;

  // move both pointers until they meet
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  // the node they meet is the starting cycle node
  // I have no idea why it is like this
  return slow;
}
