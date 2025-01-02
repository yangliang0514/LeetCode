// https://leetcode.com/problems/merge-in-between-linked-lists/

// my solution
// time: O(n + m), space: O(1)
// summary: iterate through the list and attach them (pretty straightforward)
var mergeInBetween = function (list1, a, b, list2) {
  let index = 0;
  let current = list1;

  // finds the last node in the first segment of list1
  while (index < a - 1) {
    current = current.next;
    index++;
  }

  const firstSegTail = current;

  // find the head of the second segment of list1
  while (index < b + 1) {
    current = current.next;
    index++;
  }

  const secondSegHead = current;

  current = list2;

  // finds the tail of list2
  while (current.next) {
    current = current.next;
  }

  const list2Tail = current;

  // attach them together
  firstSegTail.next = list2;
  list2Tail.next = secondSegHead;

  // return the head of the first list
  return list1;
};
