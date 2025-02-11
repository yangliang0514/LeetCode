// https://leetcode.com/problems/design-authentication-manager/

type DoublyLinkedNode = {
  tokenId: string;
  time: number;
  left: DoublyLinkedNode | null;
  right: DoublyLinkedNode | null;
};

// my solution
// time: O(1) for each operation, space: O(n)
// summary: use a doubly linked list to keep track of the tokens and their expiration times, and a map to store the tokenId and its node
class AuthenticationManager {
  private map: Map<string, DoublyLinkedNode> = new Map();
  private head: DoublyLinkedNode | null = null;
  private tail: DoublyLinkedNode | null = null;
  private timeToLive: number;

  constructor(timeToLive: number) {
    this.timeToLive = timeToLive;
  }

  // the tokenId here is always going to unique
  generate(tokenId: string, currentTime: number): void {
    // create a new node
    const node = {
      tokenId,
      time: currentTime + this.timeToLive,
      left: null,
      right: null,
    };

    // add the node to the map
    this.map.set(tokenId, node);
    // append the node to the doubly linked list
    this.appendNode(node);
  }

  renew(tokenId: string, currentTime: number): void {
    const node = this.map.get(tokenId);

    // early return if there is no node or the node has expired
    if (!node || node.time <= currentTime) return;

    // update the time
    node.time = currentTime + this.timeToLive;

    const { left, right } = node;

    // remove the node from the doubly linked list
    if (left) left.right = right;
    if (right) right.left = left;
    if (this.head === node) this.head = right;
    if (this.tail === node) this.tail = left;

    // appends to the end after renewal
    this.appendNode(node);
  }

  countUnexpiredTokens(currentTime: number): number {
    // return 0 if there are no tokens
    if (!this.head) return 0;

    let current: DoublyLinkedNode | null = this.head;

    // iterate through the expired nodes and remove them from the map
    while (current && current.time <= currentTime) {
      this.map.delete(current.tokenId);
      current = current.right;
    }

    if (current) {
      // if there are still nodes left, update the head
      current.left = null;
      this.head = current;
    } else {
      // if there are no nodes left, set the head and tail to null
      this.head = null;
      this.tail = null;
    }

    // return the size of the map, which is the number of unexpired tokens after the removal
    return this.map.size;
  }

  private appendNode(node: DoublyLinkedNode) {
    // set the right pointer to null
    node.right = null;

    // if there are no nodes in the list, set the head to the current node
    if (!this.head) this.head = node;

    // if there was a tail, link the tail with the current node
    if (this.tail) {
      this.tail.right = node;
      node.left = this.tail;
    }

    // set the tail to the current node
    this.tail = node;
  }
}
