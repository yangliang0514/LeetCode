// https://leetcode.com/problems/add-two-numbers-ii/

// my solution
// time: O(n + m), space: O(n + m)
// summary: use stacks to store digits of both list, then build up the new list (stacks can prevent having to reverse both lists)
var addTwoNumbers = function (l1, l2) {
  // stacks to store digits of both lists
  let stack1 = [];
  let stack2 = [];
  // build the stacks
  while (l1 || l2) {
    if (l1) {
      stack1.push(l1.val);
      l1 = l1.next;
    }

    if (l2) {
      stack2.push(l2.val);
      l2 = l2.next;
    }
  }
  // start building the result list
  let prevNode = null;
  // if there is any value needs to be carried over to the next digit
  let carry = false;

  // loop while there's numbers in the stacks or need to carry digit over
  while (stack1.length > 0 || stack2.length > 0 || carry) {
    // calculate the sum
    let sum = (stack1.pop() ?? 0) + (stack2.pop() ?? 0) + (carry ? 1 : 0);
    // carry to the next digit if sum >= 0
    if (sum >= 10) {
      sum %= 10;
      carry = true;
    } else {
      carry = false;
    }
    // create the node
    prevNode = new ListNode(sum, prevNode);
  }
  // return the last created node, which is the head
  return prevNode;
};

// second attempt, reverse lists
// time: O(n + m), space: O(1)
// summary: reverse both lists first, then build the new list
var addTwoNumbers = function (l1, l2) {
  // reverse both lists first
  let list1 = reverse(l1);
  let list2 = reverse(l2);

  let prevNode = null;
  let carry = false;

  // build up the result list
  while (list1 || list2 || carry) {
    let sum = 0;
    sum += list1 ? list1.val : 0;
    sum += list2 ? list2.val : 0;
    sum += carry ? 1 : 0;

    if (sum >= 10) {
      sum %= 10;
      carry = true;
    } else {
      carry = false;
    }

    prevNode = new ListNode(sum, prevNode);

    list1 = list1 ? list1.next : null;
    list2 = list2 ? list2.next : null;
  }

  return prevNode;

  // ---------- HELPER FUNCTION ----------
  // reverse linked-list
  function reverse(head) {
    let currentNode = head;
    let prevNode = null;

    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return prevNode;
  }
};
