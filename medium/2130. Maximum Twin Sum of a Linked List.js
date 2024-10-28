// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

// my solution, similar to problem 143
// time: O(n), space: O(1)
// summary: break list in half, reverse the second half then add up the sum
var pairSum = function (head) {
  let slow = head;
  let fast = head.next;
  // find the half point of the list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalfHead = slow.next;
  // break up the 2 halves
  slow.next = null;

  let firstHalf = head;
  // get the head of the reversed second half
  let secondHalf = reverse(secondHalfHead);

  let sum = 0;
  // loop through the 2 lists and calculate the su
  while (firstHalf && secondHalf) {
    const currentSum = firstHalf.val + secondHalf.val;
    // update the sum if the new sum is bigger
    if (currentSum > sum) sum = currentSum;

    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return sum;

  function reverse(node, prevNode = null) {
    if (node === null) return prevNode;
    const nextNode = node.next;
    node.next = prevNode;
    return reverse(nextNode, node);
  }
};
