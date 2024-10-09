// https://leetcode.com/problems/intersection-of-two-linked-lists/

// my solution, most simple solution, but does not meeting the follow up requirement of time: O(m + n), space: O(1)
// time: O(m + n), space: O(m)
// summary: iterate through both lists return the first node that occurred twice
var getIntersectionNode = function (headA, headB) {
  // create a set the records nodes that have appeared
  let set = new Set();
  let currentA = headA;
  let currentB = headB;

  // iterate through both lists
  // return current node if some node has appeared before
  while (currentA || currentB) {
    if (currentA) {
      if (set.has(currentA)) return currentA;
      set.add(currentA);
      currentA = currentA.next;
    }

    if (currentB) {
      if (set.has(currentB)) return currentB;
      set.add(currentB);
      currentB = currentB.next;
    }
  }
  // both lists reaches the end without any node appearing twice
  return null;
};

// second attempt, match the optimal time and space complexity but there are more concised ways
// time: O(m + n), space: O(1)
// summary: get the length of both lists, then move the longer list's head to align with the shorter one's head
// start iterating through until finding the identical node (or null when reaching the end)
var getIntersectionNode = function (headA, headB) {
  let lengthA = 0;
  let lengthB = 0;
  let currentA = headA;
  let currentB = headB;

  while (currentA || currentB) {
    if (currentA) {
      currentA = currentA.next;
      lengthA++;
    }

    if (currentB) {
      currentB = currentB.next;
      lengthB++;
    }
  }

  currentA = headA;
  currentB = headB;

  if (lengthA > lengthB) {
    let diff = lengthA - lengthB;

    while (diff > 0) {
      currentA = currentA.next;
      diff--;
    }
  }

  if (lengthB > lengthA) {
    let diff = lengthB - lengthA;

    while (diff > 0) {
      currentB = currentB.next;
      diff--;
    }
  }

  while (currentA !== currentB) {
    currentA = currentA.next;
    currentB = currentB.next;
  }

  return currentA;
};

// optimal solution
// summary: used the same approach as above but in a simpler way
var getIntersectionNode = function (headA, headB) {
  let pointA = headA;
  let pointB = headB;

  // loop through list A and list B
  // when list A reaches the end, go to the head of list B (and vice versa)
  // the switching pointer will be the aligned position that both lists will have the same remaining length
  // then start comparing
  while (pointA !== pointB) {
    pointA = pointA ? pointA.next : headB;
    pointB = pointB ? pointB.next : headA;
  }

  return pointA;
};
