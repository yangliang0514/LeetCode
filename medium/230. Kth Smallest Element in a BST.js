// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

// my solution, using in-order DFS
// time: O(k), space: O(h)
// summary: using in-order DFS and decrease k after each node is visited
// because of in-order, nodes' value will come in ascending order,
// so when k reaches 0, we have our result
var kthSmallest = function (root, k) {
  // declare a variable to store value when the node is found
  let result;
  // traverse tree with in-order DFS, and set result when the target node is found
  inorderDFS(root);
  return result;

  function inorderDFS(root) {
    // stop when it reaches the end or result is found
    if (root === null || result !== undefined) return;
    // recursively go through the left subtree
    inorderDFS(root.left);
    // decrease k after visiting each node
    k--;
    // when k reaches 0, the current node is the target
    if (k === 0) return (result = root.val);
    // go through the right subtree
    inorderDFS(root.right);
  }
};
