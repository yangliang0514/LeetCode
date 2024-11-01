// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

// my solution
// time: O(n), space: O(n)
// summary: use pre-order DFS and modify nodes along the way
var flatten = function (root) {
  // create a dummy node
  const dummy = new TreeNode(null, null, root);
  let currentNode = dummy;

  // traverse through the tree with dfs and modify nodes
  DFS(root);

  // return the root node
  return dummy.right;

  function DFS(node) {
    // return when it reaches the end
    if (!node) return;
    // append the node after the currentNode
    currentNode.right = node;
    currentNode = currentNode.right;

    // store the original left and right sub-tree
    const left = currentNode.left;
    const right = currentNode.right;

    // break the left sub-tree
    currentNode.left = null;
    // DFS through the left and right sub-tree
    DFS(left);
    DFS(right);
  }
};
