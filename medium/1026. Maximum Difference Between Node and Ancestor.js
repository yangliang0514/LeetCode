// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/

// my solution
// time: O(n), space: O(h) -> h being the height of the tree
// summary: use DFS to find the largest val and smallest val from root to every leaf
var maxAncestorDiff = function (root) {
  // use a variable to record the current largest diff
  let diff = 0;
  // do DFS to find diff from root to every leaf
  DFS(root);

  return diff;

  // use DFS and get the largest node value and smallest node value
  // maybe update the diff when reaches a leaf
  function DFS(node, largestVal = -Infinity, smallestVal = Infinity) {
    // base case, return when there is no node
    if (!node) return;
    // update the largest and smallest values
    largestVal = node.val > largestVal ? node.val : largestVal;
    smallestVal = node.val < smallestVal ? node.val : smallestVal;
    // when reaches a leaf, calculate the new diff and see if it's larger than the current diff
    if (!node.left && !node.right) {
      const newDiff = largestVal - smallestVal;
      diff = newDiff > diff ? newDiff : diff;
      return;
    }
    // keep going through the left and right subtree
    DFS(node.left, largestVal, smallestVal);
    DFS(node.right, largestVal, smallestVal);
  }
};
