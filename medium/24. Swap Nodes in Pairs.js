// https://leetcode.com/problems/swap-nodes-in-pairs/

// my solution, using recursion
// time: O(n), space: O(n)
// summary: swap 2 nodes at a time, then recusive calling the function to link each pairs together
var swapPairs = function (head) {
  // if there is no pairs of node or just 1 node passed in, return the first node
  if (head === null || head.next === null) return head;
  // the 2 nodes we're swapping here
  let firstNode = head;
  let secondNode = head.next;
  // swap nodes, calling the function will return the head of the next pair, and recursively link the rest
  firstNode.next = swapPairs(secondNode.next);
  secondNode.next = firstNode;
  // return the new head of the current pair
  return secondNode;
};

// second attempt, iterative approach
// time: O(n), space: O(1)
// summary: iterate through the list, and swap pairs of nodes
var swapPairs = function (head) {
  // create a dummy node, serves as the previous node before the swapped pair
  const dummy = new ListNode(null, head);

  let prevNode = dummy;
  let currentNode = head;
  // iterate through while there are pairs to be swapped
  while (currentNode && currentNode.next) {
    // the node after this pair
    const nextIterNode = currentNode.next.next;
    // swap nodes around
    currentNode.next.next = currentNode;
    prevNode.next = currentNode.next;
    prevNode = currentNode;
    // move the current node to the next node after this pair
    currentNode = nextIterNode;
  }
  // current node here is either null or a single node
  // link the previous node to the current node to complete the end of this list
  prevNode.next = currentNode;

  return dummy.next;
};
