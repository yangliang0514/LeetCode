// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/

// my solution
// time: O(n), space: O(n)
// summary: create a set for constant lookup time, then remove nodes accordingly

var modifiedList = function (nums, head) {
  // create a set for constant lookup time in nums
  const set = new Set(nums);
  // create a dummy node makes it easier to evaluate the next node
  const dummy = new ListNode(null, head);
  let currentNode = dummy;

  // iterate through the loop
  // and remove the next node if the next node's value is in the set
  while (currentNode.next) {
    if (set.has(currentNode.next.val)) {
      currentNode.next = currentNode.next.next;
      continue;
    }
    // only continue to the next node if the value doesn't match
    currentNode = currentNode.next;
  }

  return dummy.next;
};
