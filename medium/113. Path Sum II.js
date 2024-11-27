// https://leetcode.com/problems/path-sum-ii/

// first attempt
// time: O(n), space: O(n)
// summary: use DFS with arrays to track paths (slow as hell, needs more optimization)
var pathSum = function (root, targetSum) {
  // an array to store all the valid paths
  let results = [];
  // start DFS to find paths that equals the target
  DFS(root);

  return results;

  // use DFS and a sum parameter to avoid loop through the array every time
  function DFS(node, sum = 0, path = []) {
    if (node === null) return;

    // when reaches a leaf, push the paths to results array if sum equals the target sum
    if (!node.left && !node.right) {
      if (sum + node.val === targetSum) {
        results.push([...path, node.val]);
      }
      return;
    }

    // continue going through the left and right subtrees
    DFS(node.left, sum + node.val, [...path, node.val]);
    DFS(node.right, sum + node.val, [...path, node.val]);
  }
};

// second attempt (use backtracking)
// time: O(n), space: O(n)
// summary: use the same DFS but with another array for backtracking (eliminating the need to continuously copying the path array)
var pathSum = function (root, targetSum) {
  let results = [];
  // add another array to track the path
  let path = [];

  DFS(root);

  return results;

  // use DFS but with an external path array (backtracking)
  function DFS(node, sum = 0) {
    if (node === null) return;

    // push the current node to the path array
    path.push(node.val);

    // if the current path meets the requirement, push this to the results array
    if (!node.left && !node.right && sum + node.val === targetSum) {
      // copy the current path and push to the results
      results.push([...path]);
    }

    // continue going through the left and right subtree
    DFS(node.left, sum + node.val);
    DFS(node.right, sum, node.val);

    // pop the current node from the path
    // when the path below this node is finished, this will pop the current node out of the path
    path.pop();
  }
};
