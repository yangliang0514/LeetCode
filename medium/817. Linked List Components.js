// https://leetcode.com/problems/linked-list-components/

// my solution
// time: O(n) -> the length of the linked list, space: O(m) -> creating the nums into a set
// summary: use a set to store nums for O(1) lookup and iterate through the linked list to find connected components
var numComponents = function (head, nums) {
  // use a set to store the numbers for O(1) lookup
  const set = new Set(nums);

  // the count of the connected components
  let count = 0;

  // track if we are inside a connected component
  let connecting = false;
  let currentNode = head;

  while (currentNode) {
    // if the current node's value is in the set and wasn't in a connected component
    if (set.has(currentNode.val) && !connecting) {
      // increment the count and mark that we're inside a connected component
      count++;
      connecting = true;
    }

    // set connecting to false when current node's value is not in the set (breaks the connection)
    if (!set.has(currentNode.val)) connecting = false;

    // go on to the next node
    currentNode = currentNode.next;
  }
  // return the count
  return count;
};
