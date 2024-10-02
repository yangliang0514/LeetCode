// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// my initial solution, there are some unnecessary variables here
// time: O(n), space: O(1)
var deleteDuplicates = function (head) {
  // return if the linked list is empty
  if (!head) return head;

  // define 2 variables, one represents the nodes that are going to make in the result
  // the other one is the current one we're iterating through
  let tempNode = head;
  let currentNode = tempNode.next;

  // while haven't reaching the end
  while (currentNode) {
    // if the next value doesn't match
    // link the node to the result list
    if (tempNode.val !== currentNode.val) {
      tempNode.next = currentNode;
      tempNode = tempNode.next;
    }
    // move current node to the next one
    currentNode = currentNode.next;
  }

  // remove any other nodes after the valid nodes
  tempNode.next = null;
  return head;
};

// a more concised version
var deleteDuplicates = function (head) {
  if (!head) return head;

  let currentNode = head;

  // loop through the nodes
  while (currentNode.next) {
    // skip the next node if value equals to the current node
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next;
      continue;
    }
    currentNode = currentNode.next;
  }

  return head;
};
