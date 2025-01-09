// https://leetcode.com/problems/cache-with-time-limit/

type CacheData = {
  value: number;
  expireTime: number;
};

// my first solution (inefficient)
// summary: use Date.now() to manage expiration time, but no mechanism to delete expired keys and store un-expired count makes it inefficient
class TimeLimitedCache {
  private map: Map<number, CacheData>;

  constructor() {
    this.map = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const now = Date.now();
    let data = this.map.get(key);
    let reply = true;

    if (!data || data.expireTime < now) reply = false;

    this.map.set(key, { value, expireTime: now + duration });

    return reply;
  }

  get(key: number): number {
    const now = Date.now();
    const data = this.map.get(key);

    if (!data || data.expireTime < now) return -1;

    return data.value;
  }

  count(): number {
    const now = Date.now();
    let count = 0;

    for (const [_key, value] of this.map) {
      if (value.expireTime < now) continue;
      count++;
    }

    return count;
  }
}

type TimedData = {
  value: number;
  timeout: number;
};

// second attempt
// summary: utilizing setTimeout to automatically delete expired keys
class TimeLimitedCache2 {
  private map: Map<number, TimedData>;

  constructor() {
    this.map = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const data = this.map.get(key);

    clearTimeout(data?.timeout);
    const timeout = setTimeout(() => this.map.delete(key), duration);

    this.map.set(key, { value, timeout });

    return !!data;
  }

  get(key: number): number {
    const data = this.map.get(key);

    return data ? data.value : -1;
  }

  count(): number {
    return this.map.size;
  }
}
