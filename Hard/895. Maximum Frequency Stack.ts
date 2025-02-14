// https://leetcode.com/problems/maximum-frequency-stack/

// my solution
// time: O(1) for push/pop, space: O(n)
// summary: use a map to store the number and its frequency, and another map to store numbers for each frequency
class FreqStack {
  // map the number to its frequency
  private freqMap = new Map<number, number>();
  // group the numbers by their frequency
  private freqGroup = new Map<number, number[]>();
  // store the largest frequency
  private largest = 0;

  push(val: number): void {
    // get the new frequency
    const newFreq = (this.freqMap.get(val) || 0) + 1;
    // update the frequency map
    this.freqMap.set(val, newFreq);
    // update the frequency group
    if (!this.freqGroup.has(newFreq)) this.freqGroup.set(newFreq, []);

    // push the number to the frequency group
    this.freqGroup.get(newFreq)!.push(val);
    // update the largest frequency
    this.largest = Math.max(this.largest, newFreq);
  }

  pop(): number {
    // get the stack of the largest frequency
    const stack = this.freqGroup.get(this.largest)!;
    // pop the last number from the stack
    const num = stack.pop()!;

    // if all numbers are popped, delete the stack and decrement the largest frequency
    if (stack.length === 0) {
      this.freqGroup.delete(this.largest);
      this.largest = Math.max(0, this.largest - 1);
    }

    // calc the new frequency
    const newFreq = this.freqMap.get(num)! - 1;

    if (newFreq <= 0) {
      // delete the number if all of them are popped
      this.freqMap.delete(num);
    } else {
      // update the frequency
      this.freqMap.set(num, newFreq);
    }

    // return the number
    return num;
  }
}
