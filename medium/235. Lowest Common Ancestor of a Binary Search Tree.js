// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree

// my solution, using recursion
// time: O(log n), space: O(h)
// summary: use DFS and eliminate half of BST at a time
var lowestCommonAncestor = function (root, p, q) {
  // to find the larger and smaller value of `p` and `q`
  const larger = p.val > q.val ? p.val : q.val;
  const smaller = q.val < p.val ? q.val : p.val;

  return DFS(root);

  // using DFS to find the ancestor
  function DFS(node) {
    // the current node is the lowest common ancestor if the val is between the smaller and larger
    if (node.val >= smaller && node.val <= larger) {
      return node;
      // if the current node is smaller than the smaller value
      // we should search the right subtree
    } else if (node.val < smaller) {
      return DFS(node.right);
      // if the current node is larger than the larger value
      // we should search the left subtree
    } else if (node.val > larger) {
      return DFS(node.left);
    }
  }
};
