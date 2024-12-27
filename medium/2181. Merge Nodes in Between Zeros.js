// https://leetcode.com/problems/merge-nodes-in-between-zeros/

// recursive solution (combined with a while loop, so I guess not fully recursive)
// time: O(n), space: O(n) -> due to recursion
// summary: using recursion build up the segments
var mergeNodes = function (head) {
  // base case: when current head is the last node of the original list
  if (head.next === null) return null;

  // start with the next node of a 0 node
  let currentNode = head.next;

  // construct a new node for merge values
  const newNode = new ListNode(0);

  // sum up node values between 0s
  while (currentNode.val !== 0) {
    newNode.val += currentNode.val;
    currentNode = currentNode.next;
  }
  // recursively building up the new list
  newNode.next = mergeNodes(currentNode);
  // return the constructed merged node (which is the head of the new list on the first call)
  return newNode;
};

// iterative solution -> much faster
// time: O(n), space: O(1)
// summary: iterate through the list and update the values of the 0 nodes instead of creating new ones
var mergeNodes = function (head) {
  // track the previous merged node (the 0 nodes in the original list)
  let prevNode = head;
  // current node when iterating through
  let currentNode = head.next;

  while (currentNode) {
    if (currentNode.val !== 0) {
      // if current node's value is not 0, add it to the current merged node's value
      prevNode.val += currentNode.val;
    } else {
      // if the current node's value is 0
      // connect it to the previous merged node if the current node isn't the last node in the list
      prevNode.next = currentNode.next ? currentNode : null;
      // update the previous merged node to the current node
      prevNode = currentNode;
    }
    // move on to the next node
    currentNode = currentNode.next;
  }
  // return the head, which is also the head of the new list
  return head;
};
