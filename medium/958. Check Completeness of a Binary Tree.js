// https://leetcode.com/problems/check-completeness-of-a-binary-tree/

// my solution
// time: O(n), space: O(n)
// summary: use BFS, and when encounter a `null`, there should be no more nodes in the queue
var isCompleteTree = function (root) {
  let queue = [root];

  // get nodes from the queue
  // there will always be something in the queue, since we're pushing null as well
  while (true) {
    const node = queue.shift();

    // if the current node is null, the rest should all be null
    // else it's not a complete binary tree
    if (node === null) {
      // loop through to see if there is any not null nodes
      for (const el of queue) {
        if (el !== null) return false;
      }
      return true;
    }

    // if there is no left child and has a right child, it's not complete
    if (!node.left && node.right) return false;

    // push both children to the queue
    queue.push(node.left);
    queue.push(node.right);
  }
};
