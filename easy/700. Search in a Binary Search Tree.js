// https://leetcode.com/problems/search-in-a-binary-search-tree/

// time: O(log n), space: O(1)
// summary: classic binary search tree
var searchBST = function (root, val) {
  let currentNode = root;

  while (currentNode) {
    if (val === currentNode.val) return currentNode;

    if (val > currentNode.val) {
      currentNode = currentNode.right;
    } else {
      currentNode = currentNode.left;
    }
  }

  return null;
};
