// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/

// my solution
// time: O(n + m), space: O(n + m)
// summary: use in-order DFS to build up 2 arrays contains all numbers in ascending order, then merge them in order
var getAllElements = function (root1, root2) {
  return mergeWithOrder(inOrderDFS(root1), inOrderDFS(root2));

  // ---------- HELPER FUNCTIONS ----------

  // use in-order DFS to build up array of number in ascending order
  function inOrderDFS(root, arr = []) {
    if (root === null) return arr;

    inOrderDFS(root.left, arr);
    arr.push(root.val);
    inOrderDFS(root.right, arr);

    return arr;
  }
  // merge 2 orderd arrays
  function mergeWithOrder(arr1, arr2) {
    let result = [];
    let index1 = 0;
    let index2 = 0;

    while (true) {
      // return result when both arrays reaches the end
      if (index1 >= arr1.length && index2 >= arr2.length) return result;
      // set value to infinity if one reaches the end
      let arr1Val = arr1[index1] ?? Infinity;
      let arr2Val = arr2[index2] ?? Infinity;
      // push the smaller number to the result array
      if (arr1Val > arr2Val) {
        result.push(arr2[index2++]);
      } else {
        result.push(arr1[index1++]);
      }
    }
  }
};
