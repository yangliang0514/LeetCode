// https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed

// my solution
// summary: use a map and a list of objects to create a mutual reference to allow O(1) operations
class RandomizedCollection {
  // stores val (key) and indexes of this val in this.list (value)
  map: Map<number, number[]>;
  // stores val data objects which stores the val and the index of the element in `this.map.get(val)`
  // storing index in this object ensures removal can be done in O(1)
  list: { val: number; index: number }[];

  constructor() {
    this.map = new Map();
    this.list = [];
  }

  insert(val: number): boolean {
    let indexes = this.map.get(val); // get the indexes of the val
    let reply = false;

    if (indexes === undefined) {
      reply = true; // should return true if val doesn't exist in the map
      indexes = []; // creates the indexes array
    }

    // push the new index in the array
    indexes.push(this.list.length);
    // creates this val in the list
    this.list[this.list.length] = { val, index: indexes.length - 1 };

    // stores the indexes array into the map
    // this doesn't actually do anything unless this val wasn't in the map before
    this.map.set(val, indexes);

    return reply;
  }

  remove(val: number): boolean {
    let indexes = this.map.get(val); // get the indexes
    if (indexes === undefined) return false; // return false if val isn't in the map

    // get the last index in the indexes array, O(1) operation
    const index = indexes.pop()!;
    // gets the val object that should be removed
    const removeData = this.list[index];
    // get the last val object in this list
    const replaceData = this.list.pop()!;

    // if the 2 val objects aren't the same
    if (removeData !== replaceData) {
      // remove the val data by replacing it with the last element in the list
      // to ensure O(1) operation
      this.list[index] = replaceData;
      // updates the index info stored in the map
      // by getting the index property in the val data object
      // and updates the indexes array in the map using it ensures O(1) operation
      this.map.get(replaceData.val)![replaceData.index] = index;
    }

    // deletes the val in the map if there is no more val in the list
    if (indexes.length === 0) this.map.delete(val);

    return true;
  }

  getRandom(): number {
    // creates a random number of the array's indexes and gets the val from the val data object
    return this.list[Math.floor(Math.random() * this.list.length)].val;
  }
}
