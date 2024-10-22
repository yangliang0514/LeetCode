// https://leetcode.com/problems/same-tree/

// BFS solution
// time: O(n), space: O(n)
var isSameTree = function (p, q) {
  let queueP = p ? [p] : [];
  let queueQ = q ? [q] : [];
  // while there is something in one of the queues
  while (queueP.length > 0 || queueQ.length > 0) {
    // take the first element
    const nodeP = queueP.shift();
    const nodeQ = queueQ.shift();
    // return false if the 2 nodes don't match
    if ((nodeP && nodeP.val) !== (nodeQ && nodeQ.val)) return false;

    // push the left and right nodes to the queue, so we can later process them
    if (nodeP) {
      queueP.push(nodeP.left);
      queueP.push(nodeP.right);
    }

    if (nodeQ) {
      queueQ.push(nodeQ.left);
      queueQ.push(nodeQ.right);
    }
  }

  return true;
};

// DFS solution
// time: O(n), space: O(n)
var isSameTree = function (p, q) {
  // return true if both are null, mean it has reached the end
  if (p === null && q === null) return true;
  // return false if the 2 nodes don't match
  if ((p && p.val) !== (q && q.val)) return false;
  // recusively calling the current function do compare the left and the righ side
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
