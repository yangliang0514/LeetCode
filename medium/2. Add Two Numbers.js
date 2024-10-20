// https://leetcode.com/problems/add-two-numbers/

// my solution
// time: O(max(n, m)), space: O(max(n, m))
// summary: iterate through 2 lists and make the result list along the way
var addTwoNumbers = function (l1, l2) {
  let current1 = l1;
  let current2 = l2;
  // record if there is number to be carried over to the next digit
  let carry = false;

  const dummy = new ListNode(null, null);
  let prevResNode = dummy;

  // when there are elements left in the list
  // or one more number needs to be carried over
  while (current1 || current2 || carry) {
    let sum = 0;
    // add up value
    if (current1) sum += current1.val;
    if (current2) sum += current2.val;
    if (carry) sum += 1;

    // if added value is over 10 and should be carried over
    if (sum >= 10) {
      sum -= 10;
      carry = true;
    } else {
      carry = false;
    }
    // link new node to the list
    prevResNode.next = new ListNode(sum);
    prevResNode = prevResNode.next;

    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
  }
  // return the result list head
  return dummy.next;
};

// recursive solution, with the same time and space complexity
var addTwoNumbers = function (l1, l2, carry = false) {
  // base case, when lists are over and there is no carry
  if (!l1 && !l2 && !carry) return null;

  let sum = 0;

  if (l1) sum += l1.val;
  if (l2) sum += l2.val;
  if (carry) sum += 1;

  if (sum >= 10) {
    sum -= 10;
    carry = true;
  } else {
    carry = false;
  }
  // create a new node with the sum value
  const newNode = new ListNode(sum);
  // call the current function to recursively build up the list
  newNode.next = addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, carry);

  // return the new node
  // return the head of the new list
  // or the next node in the recursive call
  return newNode;
};
