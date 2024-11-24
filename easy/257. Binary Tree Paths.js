// https://leetcode.com/problems/binary-tree-paths/

// my solution
// time: O(n), space: O(n)
// summary: use DFS and build up the path
var binaryTreePaths = function (root) {
  let results = [];

  DFS(root);

  return results;

  function DFS(node, path = "") {
    if (node === null) return;

    // construct the string
    const pathStr = path === "" ? node.val.toString() : `->${node.val}`;

    // push to the results when current node is a leaf
    if (node.left === null && node.right === null) {
      results.push(path + pathStr);
    }

    // keep going with the left and right subtree
    DFS(node.left, path + pathStr);
    DFS(node.right, path + pathStr);
  }
};
