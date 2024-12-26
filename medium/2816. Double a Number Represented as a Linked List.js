// https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/

// my solution
// time: O(n), space: O(n)
// summary: iterate through the list and construct the number as string, then loop through the string backwards to construct the new list
var doubleIt = function (head) {
  let numStr = "";
  let currentNode = head;

  // build a string representation of the number from the linked list
  while (currentNode) {
    numStr += currentNode.val.toString();
    currentNode = currentNode.next;
  }

  let newCurrent = null;
  let carry = false;

  // traverse the number string backwards to double each digit and build the new list
  for (let i = numStr.length - 1; i >= 0; i--) {
    let num = +numStr[i] * 2;

    // add 1 if there is a number carried over from last digit
    if (carry) num++;

    // check if the current number needs to be carried over to the next one
    if (num >= 10) {
      num -= 10;
      carry = true;
    } else {
      carry = false;
    }

    // create a new node with the current digit
    const node = new ListNode(num);

    // construct the list
    if (newCurrent) {
      node.next = newCurrent;
      newCurrent = node;
    } else {
      newCurrent = node;
    }
  }

  // create one last node if there is still number carried over
  if (carry) {
    const node = new ListNode(1);
    node.next = newCurrent;
    newCurrent = node;
  }

  return newCurrent;
};
