// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

// my solution (not optimal)
// time: O(n), space; O(n)
// summary: use BFS to connect the nodes, but separate the levels with null in the queue
var connect = function (root) {
  if (root === null) return null;

  let queue = [root, null];

  while (queue.length > 0) {
    const node = queue.shift();
    // skip if the current value is null
    if (node === null) continue;
    // connect the nodes with it's next
    node.next = queue[0];
    // push the children into the queue
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    // if it reaches the end of one level, push `null` to separate them
    if (queue[0] === null) queue.push(null);
  }

  return root;
};

// optimal solution (BFS but skips the queue)
// time: O(n), space: O(1)
// summary: the queue is unnecessary since this is a perfect binary tree (every non-leaf node has exactly two children)
var connect = function (root) {
  if (root === null) return null;

  // for the current node
  let currentNode = root;
  // for the most left node of the next level
  let nextLevelNode = root.left;

  while (nextLevelNode) {
    // link the children of the current node
    currentNode.left.next = currentNode.right;
    currentNode.right.next = currentNode.next && currentNode.next.left;

    // if there are node left in this level
    if (currentNode.next) {
      // go on an process the next node in the level
      currentNode = currentNode.next;
    } else {
      // else when reached the end of a level
      // set the current node to the start of the next level
      // and set the new starting node for the next level
      currentNode = nextLevelNode;
      nextLevelNode = nextLevelNode.left;
    }
  }

  return root;
};
