// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// my solution
// time: O(n), space: O(w) -> w being the width of the tree
// summary: use BFS to find the first leaf and return its depth
var minDepth = function (root) {
  // return 0 if there is no root
  if (root === null) return 0;
  // use a queue to record traversed nodes and its depth
  let queue = [[root, 1]];

  while (queue.length > 0) {
    // retrieve the first node and depth in the queue
    const [node, depth] = queue.shift();
    // return the depth if the first leaf is found
    if (!node.left && !node.right) return depth;
    // keep going on to the next level
    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
};
