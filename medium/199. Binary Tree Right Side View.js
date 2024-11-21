// https://leetcode.com/problems/binary-tree-right-side-view/

// my solution
// time: O(n), spcace: O(d) ->  d is the depth of the tree, due to the use of recursion
// summary: use modified DFS that prioritizes the right nodes
var rightSideView = function (root) {
  // return empty array when there is no nodes
  if (root === null) return [];

  return DFS(root);

  // ---------- HELPER FUNCTION ----------
  // use DFS but prioritizes the right nodes, and record the depth along the way
  function DFS(node, dep = 0, results = []) {
    // base case, stops when reaches the end
    if (node === null) return;
    // pushes the first node that appears at every level
    // since DFS starts from the right, this will be the right most node on every level
    if (dep === results.length) {
      results[dep] = node.val;
    }

    // start DFS from the right node
    DFS(node.right, dep + 1, results);
    DFS(node.left, dep + 1, results);

    return results;
  }
};
