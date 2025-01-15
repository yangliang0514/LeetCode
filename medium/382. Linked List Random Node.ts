// https://leetcode.com/problems/linked-list-random-node
type ListNode = {
  val: number;
  next: ListNode | null;
};

// Reservoir Sampling -> iterate through once with using extra memory
// the same as Problem 398.
class Solution382 {
  private list: ListNode;

  constructor(head: ListNode) {
    this.list = head;
  }

  getRandom(): number {
    let result = this.list.val;
    let count = 0;
    let current: ListNode | null = this.list;

    while (current) {
      count++;

      if (Math.random() < 1 / count) {
        result = current.val;
      }

      current = current.next;
    }

    return result;
  }
}
