// https://leetcode.com/problems/rotate-list/

// my initial solution (make it a circular linked list first). seems like it's the optimal solution already
// time: O(n), space: O(1)
// summary: link the tail to the head first, then find the new break point
var rotateRight = function (head, k) {
  // return null if list is empty
  if (head === null) return null;

  let length = 1;
  let pointer = head;

  // loop through the entire list and find the tail and the length of the list
  // pointer is at the tail after this
  while (pointer.next) {
    pointer = pointer.next;
    length++;
  }
  // link the tail to the head of the list
  pointer.next = head;

  // determine how many steps we need to move the pointer to the new tail
  // steps should be the (length - k) or if k is greater than the length
  // you can change k to k % length, which will have the same result
  const steps = k > length ? length - (k % length) : length - k;

  // move the pointer to the new tail
  for (let i = 1; i <= steps; i++) {
    pointer = pointer.next;
  }

  // find the new head
  const newHead = pointer.next;
  // break the link of the new tail to the new head
  pointer.next = null;
  // return the new head
  return newHead;
};
