// https://leetcode.com/problems/group-anagrams/

// brute force solution
// time: O(nk log k), space: O(nk)
var groupAnagrams = function (strs) {
  // record presented anagram's index
  let map = {};
  let result = [];

  for (let i = 0; i < strs.length; i++) {
    // sort each string
    const sortedStr = strs[i].split('').sort().join('');

    // add string to result and map if not presented yet
    if (map[sortedStr] === undefined) {
      map[sortedStr] = result.length;
      result[result.length] = [strs[i]];
      continue;
    }

    // push existing anagram to results array
    result[map[sortedStr]].push(strs[i]);
  }

  return result;
};

// frequency count hashing
// time: O(nk), space: O(nk)
var groupAnagrams = function (strs) {
  let map = new Map();

  for (let i = 0; i < strs.length; i++) {
    // list an array to count appearances of each letter
    let arr = Array(26).fill(0);

    // loop through each string
    for (let j = 0; j < strs[i].length; j++) {
      // increase count at each letter's index using ASCII
      // ASCII a = 97, 97 - 97 = 0, a is at index 0
      // b - a = 1, so b is at index 1
      arr[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // join the array with a hash to create unique key
    const key = arr.join('#');

    // push current string if anagram has appeared
    if (map.has(key)) {
      map.get(key).push(strs[i]);
      continue;
    }

    // sets an array if hasn't appeared yet
    map.set(key, [strs[i]]);
  }

  // create an array with all values within the map
  return Array.from(map.values());
};
