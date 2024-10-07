// https://leetcode.com/problems/delete-node-in-a-linked-list/

// my initial solution: stupid solution, unnecessarily iterating through the entire list
// time: O(n), space: O(1)
// summary: since we wasn't give the node before the target node, the only choice is to modify the nodes' values
var deleteNode = function (node) {
  let prevNode = null;
  let currentNode = node;

  // shifts all values forward one node
  while (currentNode.next) {
    currentNode.val = currentNode.next.val;
    prevNode = currentNode;
    currentNode = currentNode.next;
  }

  // break the node after the new last node
  prevNode.next = null;
};

// optimal solution
// time: O(1), space: O(1)
// summary: change the target node's val to the node after,
// then link the target node's next node to the node after the next node
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
