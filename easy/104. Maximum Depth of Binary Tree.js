// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// my solution
// time: O(n), space: O(n)
// summary: use DFS to track the depth if left and right subtree
var maxDepth = function (root) {
  // DFS through the tree
  return DFS(root);

  // use DFS and record the depth
  function DFS(node, dept = 0) {
    // return the current depth if it reaches the end
    if (node === null) return dept;
    // add 1 to the depth every time it enters a new level
    let leftDept = DFS(node.left, dept + 1);
    let rightDept = DFS(node.right, dept + 1);
    // return the larger of the left and right subtree depth
    return Math.max(leftDept, rightDept);
  }
};
