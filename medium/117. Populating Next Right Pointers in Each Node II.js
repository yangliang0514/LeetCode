// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

// solution 1, not meeting O(1) space
// exactly the same as first solution of leetcode 116.
var connect = function (root) {
  if (root === null) return null;

  let queue = [root, null];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === null) continue;
    node.next = queue[0];

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    if (queue[0] === null) queue.push(null);
  }

  return root;
};

// optimal solution
// time: O(n), space: O(1)
// summary: handle cases and find the left most child as nextNode
var connect = function (root) {
  if (root === null) return null;

  let currentNode = root;
  let nextNode = root.left || root.right;
  let prevNode = null; // add a prevNode for the node before skipping

  // while there is still a next level to deal with
  while (nextNode) {
    // if there is a left child
    if (currentNode.left) {
      if (prevNode) {
        // connect previous node to the current left child node
        prevNode.next = currentNode.left;
      }
      // set this node as previous node
      prevNode = currentNode.left;
    }

    // same for the right
    if (currentNode.right) {
      if (prevNode) {
        prevNode.next = currentNode.right;
      }

      prevNode = currentNode.right;
    }

    // if there are more nodes on the same level, go to the next node
    if (currentNode.next) {
      currentNode = currentNode.next;
    } else {
      // if this is the lase node on this level
      // set current node to the left most node on the next level
      currentNode = nextNode;
      // and reset the previous node, since it is not needed when starting a new level
      prevNode = null;

      // first find the first node with children in the level (it might be set to null of all nodes don't have children)
      while (nextNode && !nextNode.left && !nextNode.right) {
        nextNode = nextNode.next;
      }

      // `nextNode` at this point is the first parent node with children
      // so then set the next node to be the first child (as a starting node for the next level)
      nextNode = nextNode && (nextNode.left || nextNode.right);
    }
  }

  return root;
};
