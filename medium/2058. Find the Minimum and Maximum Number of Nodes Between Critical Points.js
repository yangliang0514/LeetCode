// https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/

// my solution
// time: O(n), space: O(1)
// summary: loop through the list and track the distances
var nodesBetweenCriticalPoints = function (head) {
  // record the first and previous critical point index when loop through the list
  let firstCritical = null;
  let prevCritical = null;

  // initialize the max and min distance
  let minDistance = Infinity;
  let maxDistance = -Infinity;

  // record the nodes and index when looping through
  let prev = null;
  let current = head;
  let currentIndex = 0;

  while (current) {
    // if current node is a critical point
    if (isCritical(prev, current)) {
      // update distances if the current node is not the first critical point
      if (firstCritical !== null) {
        maxDistance = Math.max(maxDistance, currentIndex - firstCritical);
        minDistance = Math.min(minDistance, currentIndex - prevCritical);
      } else {
        // else set the current index as first critical
        firstCritical = currentIndex;
      }
      // set the previous critical point as the current index
      prevCritical = currentIndex;
    }

    // update and go on the next iteration
    prev = current;
    current = current.next;
    currentIndex++;
  }

  // if the first and previous critical point is on the same index after looping through the entire list
  // means there is only one critical point, so return -1
  if (firstCritical === prevCritical) return [-1, -1];

  // return the min and max distance
  return [minDistance, maxDistance];

  // helper function to determine if the node is critical
  function isCritical(prev, current) {
    if (!prev || !current.next) return false;
    return (
      (current.val > prev.val && current.val > current.next.val) ||
      (current.val < prev.val && current.val < current.next.val)
    );
  }
};
