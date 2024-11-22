// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

// my solution, unshift could cause inefficiency
// time: O(n), space: O(n)
// summary: same approach as problem 102's DFS solution
var zigzagLevelOrder = function (root, level = 0, results = []) {
  if (root === null) return [];
  // create an array for each level if it's not already created
  if (results[level] === undefined) results[level] = [];

  // on even level, append to the end of the array
  // on odd level, prepend to the start of the array
  if (level % 2 === 0) {
    results[level].push(root.val);
  } else {
    results[level].unshift(root.val); // unshift is inefficient
  }

  // continue doing it to the left and right subtree
  zigzagLevelOrder(root.left, level + 1, results);
  zigzagLevelOrder(root.right, level + 1, results);

  return results;
};
