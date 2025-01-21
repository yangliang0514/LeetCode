// https://leetcode.com/problems/binary-search-tree-iterator/

// my solution
// summary: use in-order DFS to traverse through the BST so it will iterate through in ascending order

type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

class BSTIterator {
  // create a stack for DFS
  private stack: TreeNode[] = [];

  constructor(root: TreeNode | null) {
    // push the nodes until the left most child node of the current node
    this.pushLeftMost(root);
  }

  next(): number {
    // the last node in the stack is the next node to iterate over
    const current = this.stack.pop()!;
    // push all the left nodes of the right child to the stack
    this.pushLeftMost(current.right);

    return current.val;
  }

  hasNext(): boolean {
    // there are next nodes if the stack isn't empty
    return this.stack.length > 0;
  }

  private pushLeftMost(node: TreeNode | null): void {
    // early return if there is no node passed in
    if (node === null) return;

    // push until reaches the left most child
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }
}
