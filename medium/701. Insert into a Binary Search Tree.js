// https://leetcode.com/problems/insert-into-a-binary-search-tree/

// time: O(log n), space: O(1)
// summary: classic binary search tree insertion
var insertIntoBST = function (root, val) {
  if (root === null) return new TreeNode(val);

  let currentNode = root;

  while (true) {
    if (val > currentNode.val) {
      if (currentNode.right) {
        currentNode = currentNode.right;
        continue;
      }

      currentNode.right = new TreeNode(val);
      return root;
    }

    if (currentNode.left) {
      currentNode = currentNode.left;
      continue;
    }

    currentNode.left = new TreeNode(val);
    return root;
  }
};
