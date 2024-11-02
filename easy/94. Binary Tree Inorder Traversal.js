// https://leetcode.com/problems/binary-tree-inorder-traversal/

// my solution
// time: O(n), space: O(n)
// summary: recursive approach, in-order means left -> root -> right
var inorderTraversal = function (root) {
  let result = [];

  DFS(root);

  return result;

  function DFS(node) {
    if (node === null) return;

    DFS(node.left);
    result.push(node.val);
    DFS(node.right);
  }
};

// iterative approach
var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    result.push(current.val);

    current = current.right;
  }

  return result;
};
