// https://leetcode.com/problems/design-browser-history/

// my solution (use and array to store history)
// summary: O(1) for back and forward, O(n) for visit (due to Array.slice)
class BrowserHistory {
  private history: string[];
  private currentIndex: number;

  constructor(homepage: string) {
    // stores the home page in history and saves the current index
    this.history = [homepage];
    this.currentIndex = 0;
  }

  visit(url: string): void {
    // increase the current index first
    this.currentIndex++;
    // cuts everything after the previous page (this step makes it O(n))
    this.history = this.history.slice(0, this.currentIndex);
    // push the current page to the end of the history
    this.history.push(url);
  }

  back(steps: number): string {
    // calculate the new index
    const newIndex = this.currentIndex - steps;
    // the new index should be no less than 0 (first in the history)
    this.currentIndex = Math.max(newIndex, 0);
    // return the new current page
    return this.history[this.currentIndex];
  }

  forward(steps: number): string {
    // calculate the new index
    const newIndex = this.currentIndex + steps;
    // the new index should be no more the the last page in the history
    this.currentIndex = Math.min(newIndex, this.history.length - 1);
    // return the new current page
    return this.history[this.currentIndex];
  }
}

// second solution (use a doubly linked list to store history)
// summary: O(n) for back and forward, O(1) for visit

// define a node of a doubly linked list
class DoubleLinkedNode {
  val: string;
  left: DoubleLinkedNode | null;
  right: DoubleLinkedNode | null;

  constructor(
    val: string,
    left: DoubleLinkedNode | null = null,
    right: DoubleLinkedNode | null = null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BrowserHistory2 {
  private current: DoubleLinkedNode;

  constructor(homepage: string) {
    // set the current page when initializing
    this.current = new DoubleLinkedNode(homepage);
  }

  visit(url: string): void {
    // create a new history
    const newCurrent = new DoubleLinkedNode(url, this.current);

    // set the current as the next page of the previous page
    this.current.right = newCurrent;
    this.current = newCurrent;
  }

  back(steps: number): string {
    let current: DoubleLinkedNode | null = this.current;

    // walk back nodes
    while (current.left && steps > 0) {
      current = current.left;
      steps--;
    }

    // set new current
    this.current = current;

    return current.val;
  }

  forward(steps: number): string {
    let current: DoubleLinkedNode | null = this.current;

    // walk back nodes
    while (current.right && steps > 0) {
      current = current.right;
      steps--;
    }

    // set new current
    this.current = current;

    return current.val;
  }
}
