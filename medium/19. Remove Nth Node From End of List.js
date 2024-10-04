// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// my initial solution
// time: O(n), space: O(1)
var removeNthFromEnd = function (head, n) {
  // return empty list if list only contains 1 node
  if (head.next === null) return null;

  // set 2 pointers and record how many steps takes to traverse to the end
  let stepsToEnd = 0;
  let point1 = head;
  let point2 = head;

  // move pointer2 to the end
  while (point2.next) {
    point2 = point2.next;
    stepsToEnd++;
  }

  // if steps to the end + 1 == n, it means the head should be removed
  if (stepsToEnd + 1 === n) return head.next;

  // move pointer1 (stepsToEnd - n) times, it should land on the node just before the one to be deleted
  for (let i = 1; i <= stepsToEnd - n; i++) {
    point1 = point1.next;
  }

  // link pointer1 to the one after the node that should be deleted
  point1.next = point1.next.next;

  return head;
};

// more concised version, with the same time and space complexity
var removeNthFromEnd = function (head, n) {
  // make a dummy node in the front
  const dummy = new ListNode(0, head);
  // 2 pointers one starts before the head, one starts on the head
  let pointer1 = dummy;
  let pointer2 = head;
  // move pointer2 n steps forward to have a correct gap (n + 1) with pointer 1
  // or until pointer2 reaches the end
  while (n > 0 && pointer2) {
    pointer2 = pointer2.next;
    n--;
  }
  // move pointer1 along with pointer2 until pointer2 reaches the end
  while (pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  // pointer1 should be the node before the target node, so remove the target node
  pointer1.next = pointer1.next.next;

  // return the head
  // make sure to use the dummy.next because in the edge cases that the original head should be removed
  // the code above pointer1 is still on the dummy node, and modifties the dummy.next to the node after the head
  return dummy.next;
};
