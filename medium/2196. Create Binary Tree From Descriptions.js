// https://leetcode.com/problems/create-binary-tree-from-descriptions/

// my solution
// time: O(n + m), space: O(m)
// summary: use a map to store nodes and whether is has a parent or not
var createBinaryTree = function (descriptions) {
  // the map's key is the value of the node,
  // the value is an array that the first element is the node,
  // and the second element is a boolean to store whether the node has parent or not
  const map = new Map();

  // constructs the tree
  for (const [parent, child, isLeft] of descriptions) {
    // set the child node's hasParent to true
    setHasParent(child);
    // link the nodes' relationship
    if (isLeft === 1) {
      getNode(parent).left = getNode(child);
    } else {
      getNode(parent).right = getNode(child);
    }
  }

  // iterate through the map to find the root
  for (const [_key, val] of map) {
    // return the node with no parent
    if (!val[1]) return val[0];
  }

  // gets or creates the node arr in the map
  function getMapVal(val) {
    if (map.has(val)) {
      return map.get(val);
    } else {
      const arr = [new TreeNode(val), false];
      map.set(val, arr);
      return arr;
    }
  }

  function getNode(val) {
    return getMapVal(val)[0];
  }

  function setHasParent(val) {
    getMapVal(val)[1] = true;
  }
};
