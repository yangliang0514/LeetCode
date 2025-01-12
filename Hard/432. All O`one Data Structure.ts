// https://leetcode.com/problems/all-oone-data-structure/

// first attempt, it passes but not meeting O(1) requirement when updating the min and max
// summary: use maps and sets for grouping key counts,
//          and use min and max class variables to manage state (this makes it unable to maintain O(1))
class AllOne {
  // this store a key and the count of the key
  private stringCount: Map<string, number>;
  // this groups keys by its count
  private countGroup: Map<number, Set<string>>;
  // manages the current min and max count
  private min: number;
  private max: number;

  constructor() {
    this.stringCount = new Map();
    this.countGroup = new Map();
    this.min = Infinity;
    this.max = -Infinity;
  }

  inc(key: string): void {
    if (!this.stringCount.has(key)) {
      this.stringCount.set(key, 0);
    }

    const newCount = this.stringCount.get(key)! + 1;

    this.stringCount.set(key, newCount);

    if (this.countGroup.has(newCount - 1)) {
      const set = this.countGroup.get(newCount - 1)!;
      set.delete(key);
      if (set.size === 0) this.countGroup.delete(newCount - 1);
    }

    if (!this.countGroup.has(newCount)) {
      this.countGroup.set(newCount, new Set());
    }

    this.countGroup.get(newCount)?.add(key);

    this.updateMinMax(newCount - 1, newCount);
  }

  dec(key: string): void {
    if (!this.stringCount.has(key)) return;

    const newCount = this.stringCount.get(key)! - 1;

    this.stringCount.set(key, newCount);

    if (this.stringCount.get(key)! < 1) this.stringCount.delete(key);

    this.countGroup.get(newCount + 1)!.delete(key);

    if (this.countGroup.get(newCount + 1)!.size === 0) {
      this.countGroup.delete(newCount + 1);
    }

    if (newCount) {
      if (!this.countGroup.has(newCount)) {
        this.countGroup.set(newCount, new Set());
      }
      this.countGroup.get(newCount)?.add(key);
    }

    this.updateMinMax(newCount + 1, newCount);
  }

  // O(1)
  getMaxKey(): string {
    const maxSet = this.countGroup.get(this.max);

    if (maxSet === undefined) return "";

    return maxSet.values().next().value;
  }

  // O(1)
  getMinKey(): string {
    const minSet = this.countGroup.get(this.min);

    if (minSet === undefined) return "";

    return minSet.values().next().value;
  }

  // O(n) -> n is the number of distinct counts
  // this make the inc and dec operation O(n) as well
  private updateMinMax(oldCount: number, newCount: number): void {
    if (this.stringCount.size === 0 && this.countGroup.size === 0) {
      this.min = Infinity;
      this.max = -Infinity;
      return;
    }

    // this part is not O(1)
    const countKeys = [...this.countGroup.keys()];
    this.min = Math.min(...countKeys);
    this.max = Math.max(...countKeys);
  }
}
