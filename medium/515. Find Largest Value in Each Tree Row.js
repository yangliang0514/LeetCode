// https://leetcode.com/problems/find-largest-value-in-each-tree-row/

// my solution
// time: O(n), space: O(h) -> h is the height if the tree
// summary: use DFS and record the level
var largestValues = function (root, level = 0, results = []) {
  // return empty array if there is no tree
  if (root === null) return [];

  // if there isn't a value of the current level
  // or the previous value of the current level is smaller
  // set the current node's value as the current level's largest
  if (results[level] === undefined || results[level] < root.val) {
    results[level] = root.val;
  }

  // continue doing it to the left and right subtree
  largestValues(root.left, level + 1, results);
  largestValues(root.right, level + 1, results);

  return results;
};
