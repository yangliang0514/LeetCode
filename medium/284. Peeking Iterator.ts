// https://leetcode.com/problems/peeking-iterator/

// my solution
// time: O(1), space: O(1) for all operations
// summary: store and cache the next value in the iterator
interface Iter {
  hasNext(): boolean;
  next(): number;
}

class PeekingIterator {
  private iterator: Iter;
  private nextNum?: number; // cache the next number after peak

  constructor(iterator: Iter) {
    this.iterator = iterator;
  }

  peek(): number {
    // if hasn't peeked yet
    if (!this.hasPeekedValue()) {
      // store the next number in the cache
      this.nextNum = this.iterator.next();
    }
    // return the cached next number
    return this.nextNum!;
  }

  next(): number {
    // where there is a cached number
    if (this.hasPeekedValue()) {
      const next = this.nextNum!;
      // clear the cache
      this.nextNum = undefined;

      // return the cached number
      return next;
    }

    // return the iterator.next() if there is no cached number
    return this.iterator.next();
  }

  hasNext(): boolean {
    // just return true if there is a cached number
    // if there is no cached number, just return iterator.hasNext()
    return this.hasPeekedValue() || this.iterator.hasNext();
  }

  // a helper function to determine if there is a cached number
  private hasPeekedValue() {
    return this.nextNum !== undefined;
  }
}
