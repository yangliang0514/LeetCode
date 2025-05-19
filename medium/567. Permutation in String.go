// https://leetcode.com/problems/permutation-in-string/

package main

// time: O(n) -> n is the len(s2), space: O(1) -> only 2 [26]int
// summary: use sliding window to compare s1 to substring of s2
func checkInclusion(s1 string, s2 string) bool {

	// return false if s1 is longer than s2
	if len(s1) > len(s2) {
		return false
	}

	// create 2 frequency arrays for sliding window
	var s1Freq, s2Freq [26]int

	for i := 0; i < len(s1); i++ {
		s1Freq[s1[i]-'a']++ // fill in the frequency array for s1
		s2Freq[s2[i]-'a']++ // fill in the first window of s2
	}

	// check if the first window is a permutation of s1
	if s1Freq == s2Freq {
		return true
	}

	// slide the window across s2
	for i := len(s1); i < len(s2); i++ {
		s2Freq[s2[i]-'a']++         // move the window to the next character in s2
		s2Freq[s2[i-len(s1)]-'a']-- // remove the first character of the previous window

		// check if the current window is a permutation of s1
		if s1Freq == s2Freq {
			return true
		}
	}

	// return false when no permutation is found
	return false
}
