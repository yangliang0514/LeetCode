// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree

// my solution
// time: O(n), space: O(n)
// summary: use DFS to find the target nodes on the left and right subtree
var lowestCommonAncestor = function (root, p, q) {
  // use DFS to traverse through and return the LCA
  return DFS(root);

  function DFS(node) {
    // base case, return null when it reaches the end and nothing is found
    if (node === null) return null;

    // return the current node if it's one of the target nodes
    if (node === p || node === q) return node;

    // keep going down the left or right subtree
    const left = DFS(node.left);
    const right = DFS(node.right);

    // if target node is found both on the left and right subtree
    // then the current node is the LCA of both target nodes
    if (left && right) return node;

    // return the found target node if it's found on only one subtree
    // it serves 2 purposes
    //   1. when current node is in any subtree below the root,
    //      it needs to return the found target node for ancestors to evaluate
    //   2. when current node is the root, and only one subtree has a target node found
    //      means the other target node must be a descendant of the found target node
    return left || right;
  }
};
