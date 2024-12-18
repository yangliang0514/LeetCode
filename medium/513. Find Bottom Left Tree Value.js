// https://leetcode.com/problems/find-bottom-left-tree-value/

// my solution
// time: O(n), space: O(h) -> h being the height of the tree
// summary: use DFS and keep in track of the depth
var findBottomLeftValue = function (root) {
  // start with 0 depth
  let depth = 0;
  // with no value at first
  let val = null;

  DFS(root);

  return val;

  function DFS(node, level = 1) {
    if (node === null) return;
    // if the current level is greater than the previous depth
    // update the value with the current node's value
    // this will be the left most node at the current level
    if (level > depth) {
      depth = level;
      val = node.val;
    }
    // keep going with the next level
    DFS(node.left, level + 1);
    DFS(node.right, level + 1);
  }
};
