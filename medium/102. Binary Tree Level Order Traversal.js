// https://leetcode.com/problems/binary-tree-level-order-traversal/

// my solution, using BFS
// time: O(n), space: O(n)
var levelOrder = function (root) {
  if (root === null) return [];

  // declare a queue with the root node as the first level
  let queue = [[root]];
  let result = [];

  // iterate through the queue
  while (queue.length > 0) {
    // take the first level of nodes in the queue
    const nodes = queue.shift();
    // build up values in the current level, for the return result
    let level = [];
    // build up nodes of the next level, for pushing it to the queue
    let nextLevelNodes = [];
    // loop through the current level
    for (let i = 0; i < nodes.length; i++) {
      // push the current's value to the current level
      level.push(nodes[i].val);
      // push the nodes of the next level
      if (nodes[i].left) nextLevelNodes.push(nodes[i].left);
      if (nodes[i].right) nextLevelNodes.push(nodes[i].right);
    }

    // push built values to the results
    // push the built nodes to the queue
    if (level.length > 0) result.push(level);
    if (nextLevelNodes.length > 0) queue.push(nextLevelNodes);
  }
  return result;
};

// DFS solution
// time: O(n), space: O(n)
var levelOrder = function (root, level = 0, result = []) {
  // return empty array if there is no root
  if (root === null) return result;
  // push an empty array for the next level if current level hasn't been reached yet
  if (result.length === level) result.push([]);
  // push the current node's value to the current level
  result[level].push(root.val);
  // recursively calling the current function to handle the next level
  levelOrder(root.left, level + 1, result);
  levelOrder(root.right, level + 1, result);
  // return the result after every level has been built
  return result;
};
