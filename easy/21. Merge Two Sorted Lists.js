// https://leetcode.com/problems/merge-two-sorted-lists/

// time: O(m + n), space: O(1)
var mergeTwoLists = function (list1, list2) {
  // create an empty head to start with, serves as the head of our result list
  // this is needed in case both list1 and list2 are null
  const dummyHead = new ListNode();
  // the current node when iterating through
  let currentNode = dummyHead;
  // while both lists have not reached the end
  while (list1 && list2) {
    // compare values of the current 2 lists
    if (list1.val < list2.val) {
      // if list1 < list2
      // attach the head of list1 to the results
      currentNode.next = list1;
      // chop of the head of list1
      list1 = list1.next;
    } else {
      // vice versa when list2 > list1
      currentNode.next = list2;
      list2 = list2.next;
    }
    // iterate to the next node in hour result list
    currentNode = currentNode.next;
  }
  // it only reaches here when either list1 or list2 is null
  // so we need to attach the tail of which ever list that's not null to the end
  currentNode.next = list1 || list2;
  // return the result list (not include the empty head)
  return dummyHead.next;
};
