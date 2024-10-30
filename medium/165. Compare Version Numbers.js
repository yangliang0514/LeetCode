// https://leetcode.com/problems/compare-version-numbers/

// my solution, manually parse strings without using `split`
// time: O(n + m), space: O(1)
// summary: continuously compare each segment of revision
var compareVersion = function (version1, version2) {
  // store the current index of each version
  let ver1Index = 0;
  let ver2Index = 0;
  // keep comparing each segment
  while (ver1Index < version1.length || ver2Index < version2.length) {
    // get the revision of the 2 versions
    const [revision1, index1] = getRevision(version1, ver1Index);
    const [revision2, index2] = getRevision(version2, ver2Index);
    // return if one is larger than the other
    if (revision1 > revision2) return 1;
    if (revision1 < revision2) return -1;
    // update the current index
    ver1Index = index1;
    ver2Index = index2;
  }
  // if both versions have reached the end without returning, there are the same
  return 0;

  // ---------- HELPER FUNCTION ----------
  // finds the revision number from the current index to the next "."
  // returns the revision number and the starting index of the next segment
  function getRevision(version, index) {
    if (version[index] === undefined) return [0, index + 1];

    let revision = "";
    // build the revision string
    while (version[index] && version[index] !== ".") {
      revision += version[index];
      index++;
    }
    // return the revision number and the next index
    return [parseInt(revision), index + 1];
  }
};

// just use split, much simpler
// time: O(n + m), space: O(n + m)
var compareVersion = function (version1, version2) {
  // splits the 2 versions into array of each revision
  const parts1 = version1.split(".");
  const parts2 = version2.split(".");
  const maxLength = Math.max(parts1.length, parts2.length);

  // iterate through the array and compare
  for (let i = 0; i < maxLength; i++) {
    const num1 = i < parts1.length ? parseInt(parts1[i]) : 0;
    const num2 = i < parts2.length ? parseInt(parts2[i]) : 0;

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
};
