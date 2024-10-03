// https://leetcode.com/problems/linked-list-cycle/

// my initial solution, using a set (straightforward)
// time: O(n), space: O(n)
var hasCycle = function (head) {
  if (head === null) return false;
  // use a map to record which node has appeared before
  const set = new Set();
  let currentNode = head;
  // loop through the list
  while (currentNode.next !== null) {
    // return true if the current node has appeared before
    if (set.has(currentNode)) return true;
    set.add(currentNode, true);
    currentNode = currentNode.next;
  }
  // return false if no node appeared more than once
  return false;
};

// Floyd’s Tortoise and Hare Algorithm
// use 2 pointers, one goes faster than the other (slow goes 1 at a time and fast goes 2)
// if there isn't a cycle, the faster pointer will reach the end first
// when there is a cycle, the fast pointer will catch up to the slow pointer
// in a cycle, the fast pointer is going to close in on the slow pointer 1 at a time, so O(n)
// time: O(n), space: O(1)
var hasCycle = function (head) {
  // start at the same point
  let slowPointer = head;
  let fastPointer = head;
  // while the fast pointer haven't reach the end
  while (fastPointer && fastPointer.next) {
    // move the pointers respectively
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    // return true if the pointers meet each other
    if (fastPointer === slowPointer) return true;
  }
  // code reaches here if the is an end in the list
  return false;
};
