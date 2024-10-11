// https://leetcode.com/problems/copy-list-with-random-pointer/

// my solution
// time: O(n), space: O(n)
// summary: create a helper function to copy node, and return the copied node if it has already been copied (using closure)
var copyRandomList = function (head) {
  const copyNode = copyFunc();
  let currentNode = head;
  const newHead = copyNode(head);

  // loop through the list
  while (currentNode) {
    // copies every node and its next and random node
    const currentCopy = copyNode(currentNode);
    currentCopy.next = copyNode(currentNode.next);
    currentCopy.random = copyNode(currentNode.random);

    currentNode = currentNode.next;
  }
  // return the new deep copied list
  return newHead;

  // ---------- HELPER FUNCTION ----------
  // this function returns a function that copies nodes and returns it
  // will return an existing node if the node passed in has already been copied before
  function copyFunc() {
    let map = new Map();

    return (node) => {
      if (node === null) return null;
      if (map.has(node)) return map.get(node);
      const copyNode = new _Node(node.val, undefined, undefined);
      map.set(node, copyNode);
      return copyNode;
    };
  }
};
