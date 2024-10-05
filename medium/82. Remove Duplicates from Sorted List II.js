// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

// my solution
// time: O(n), space: O(1)
var deleteDuplicates = function (head) {
  // set a dummy node before the head
  const dummy = new ListNode(null, head);
  let pointer1 = dummy;
  let pointer2 = dummy;

  // find the nodes that has no duplicate
  // we're evaluating the pointer2.next
  while (pointer2.next) {
    // if pointer2.next has no duplicate
    // link it after pointer1, and move pointer1 to this node
    // then move pointer2 to the next node
    if (
      pointer2.val !== pointer2.next.val &&
      pointer2.next.val !== pointer2.next.next?.val
    ) {
      pointer1.next = pointer2.next;
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
      continue;
    }

    // if the node has duplicate
    // break the link after pointer1
    // only add it until we find the next one
    pointer2 = pointer2.next;
    pointer1.next = null;
  }

  return dummy.next;
};
