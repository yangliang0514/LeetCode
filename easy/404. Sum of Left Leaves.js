// https://leetcode.com/problems/sum-of-left-leaves/

// my solution
// time: O(n), space: O(h) -> h being the height of the tree
// summary: use DFS and add the left leaves
var sumOfLeftLeaves = function (root) {
  let sum = 0;

  DFS(root);

  return sum;

  function DFS(node) {
    if (!node) return;
    // checks the left leaves and adds the value
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    DFS(node.left);
    DFS(node.right);
  }
};
