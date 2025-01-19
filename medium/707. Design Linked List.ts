// https://leetcode.com/problems/design-linked-list

// my solution

type node = {
  val: number;
  next: node | null;
};

class MyLinkedList {
  private head: node | null;
  private tail: node | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index: number): number {
    // get the node
    const node = this.getNode(index);

    // return the `val` if there is a node at the index, else return -1
    return node ? node.val : -1;
  }

  addAtHead(val: number): void {
    // create a new node
    const node = { val, next: this.head };

    // set this.head to the new node
    this.head = node;
    // also set the tail if the list was empty before inserting
    if (this.tail === null) this.tail = node;
    this.length++;
  }

  addAtTail(val: number): void {
    // create a new node
    const node = { val, next: null };

    if (this.tail) {
      // append the new node after the tail of there was a tail
      this.tail.next = node;
    } else {
      // if there wasn't a tail (list was empty)
      // set this.head to the new node
      this.head = node;
    }

    // set this.tail to the new node (the new tail)
    this.tail = node;
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    // early return if the index is out of range
    if (index < 0 || index > this.length) return;

    // prepend to the head if index equals 0
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    // append to the end of the list if index equals the length of the list
    if (index === this.length) {
      this.addAtTail(val);
      return;
    }

    // create a new node
    const node: node = { val, next: null };
    // get the node prior to the index
    const prevNode = this.getNode(index - 1);

    // link the nodes
    node.next = prevNode!.next;
    prevNode!.next = node;
    this.length++;
  }

  deleteAtIndex(index: number): void {
    // early return if the index is out of range
    if (index < 0 || index >= this.length) return;

    // delete the head if index equals 0
    if (index === 0) {
      // move the head to the next position
      this.head = this.head!.next;
      // also set the tail to null if there is only one node in the list
      if (this.length === 1) this.tail = null;
      this.length--;
      return;
    }

    // get the node prior to the index
    const prevNode = this.getNode(index - 1);

    if (prevNode && prevNode.next) {
      // skip the node to be deleted
      prevNode.next = prevNode.next.next;

      if (index === this.length - 1) {
        // if the node to be deleted is the tail
        // set the tail to the node before the deleted node
        this.tail = prevNode;
      }
    }

    this.length--;
  }

  // a helper method to get the node at a specific index
  private getNode(index: number): node | null {
    // return null of the index is out of range
    if (index < 0 || index >= this.length) return null;

    let current = this.head;

    // loop through to find the target node
    while (current && index > 0) {
      current = current.next;
      index--;
    }

    // return the target node
    return current;
  }
}
