// https://leetcode.com/problems/path-sum/

// my solution
// time: O(n), space: O(n)
// summary: use recursion to find if there is a path that has a sum of target sum
var hasPathSum = function (root, targetSum) {
  // return false if there is nothing in the tree
  if (root === null) return false;

  return dfsSum(root);

  //  ---------- HELPER FUNCTION ---------
  // use dfs to find the sum of left and right subtree
  function dfsSum(node, sum = 0) {
    // check the target sum when it reached the end
    if (node === null) return sum === targetSum;

    // if one of the subtree is null, only have to check the other subtree
    if (node.left === null) return dfsSum(node.right, sum + node.val);
    if (node.right === null) return dfsSum(node.left, sum + node.val);
    // the result should be true if either subtree is true
    return (
      dfsSum(node.left, sum + node.val) || dfsSum(node.right, sum + node.val)
    );
  }
};
