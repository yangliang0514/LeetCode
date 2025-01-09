// https://leetcode.com/problems/insert-delete-getrandom-o1/

// my solution
// summary: use a map and array together to achieve O(1) operation
class RandomizedSet {
  // use a map to store the `val` as key and an index referencing the list as its value
  map: Map<number, number>;
  // use an array for O(1) random access
  list: number[];

  constructor() {
    this.map = new Map();
    this.list = [];
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;

    this.map.set(val, this.list.length); // store the index of the last element of the list
    this.list.push(val); // push this `val` into the list

    return true;
  }

  remove(val: number): boolean {
    const index = this.map.get(val);

    if (index === undefined) return false;

    // the val of the last element in the list
    const lastVal = this.list[this.list.length - 1];

    // put the last element to the index of the deleted val
    this.list[index] = this.list[this.list.length - 1];

    // this order matters, there might be only 1 value left
    // so make sure set the new index before deleting (avoid accidentally adding it back)
    this.map.set(lastVal, index); // sets the new index of the swapped value
    this.map.delete(val); // delete the val
    this.list.pop(); // removes the last element

    return true;
  }

  getRandom(): number {
    // creates a random number of the array's indexes
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}
