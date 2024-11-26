// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

// my solution
// time: O(n), space: O(n)
// summary: using DFS (trying to avoid using reverse at the end, but seems even less efficient)
var levelOrderBottom = function (root) {
  if (root === null) return [];

  // builds up an array to record nodes with its depth
  let nodes = [];
  let results = [];

  DFS(root);

  // loop through the array to build up the results array
  for (const [val, depth] of nodes) {
    results[results.length - depth - 1].push(val);
  }

  return results;

  // using DFS to find all nodes and its depth
  // also dynamically building up the results array
  function DFS(node, depth = 0) {
    if (node === null) return;
    if (results.length === depth) results.push([]);
    nodes.push([node.val, depth]);
    DFS(node.left, depth + 1);
    DFS(node.right, depth + 1);
  }
};

// better solution
// time: O(n), space: O(n)
// summary: using BFS and builds it up level by level, then reverse the results at the end
var levelOrderBottom = function (root) {
  if (root === null) return [];

  let queue = [root];
  let results = [];

  while (queue.length > 0) {
    let level = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    results.push(level);
  }

  return results.reverse();
};
