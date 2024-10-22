// https://leetcode.com/problems/validate-binary-search-tree/

// time: O(n), space: O(n)
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  // base case: return true when reaches the end of a subtree
  // this will only be reached if no nodes are invalid
  if (root === null) return true;
  // return false if the current node's value
  // is lesser than min or greater than max, which is invalid
  if (root.val <= min || root.val >= max) return false;
  // recursively check the left and right subtrees, with update min or max
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};
