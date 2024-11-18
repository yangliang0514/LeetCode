// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

// my solution
// time: O(n), space: O(n) -> space is O(n) because we're using recursion
// summary: use DFS and return the sum when it reaches a leaf
var sumNumbers = function (root, sum = 0) {
  // when a node is null, means it reaches the end, so return 0
  // this is used when a node has only left or right child,
  // so it's not a leaf and we still need to calc the sum
  if (root === null) return 0;

  // return the sum when reaches a leaf
  if (root.left === null && root.right === null) return sum * 10 + root.val;

  // return the sum of the left and right subtree of the root
  return (
    sumNumbers(root.left, sum * 10 + root.val) +
    sumNumbers(root.right, sum * 10 + root.val)
  );
};
