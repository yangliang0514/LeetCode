// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

// my solution
// time: O(n), space: O(1)
// summary: loop through both string at once to find the differences

package main

func areAlmostEqual(s1 string, s2 string) bool {
	// if both string are already euqal, return true
	if s1 == s2 {
		return true
	}

	// store mismatched characters
	var char1, char2 byte
	// count mismatched indices
	count := 0

	for i := 0; i < len(s1); i++ {
		// skip if characters match
		if s1[i] == s2[i] {
			continue
		}

		// increment mismatch count
		count++

		// if more than 2 mismatches, return false
		if count > 2 {
			return false
		}

		// store first mismatch
		if count == 1 {
			char1 = s1[i]
			char2 = s2[i]
			continue
		}

		// ensure the second mismatch forms a valid swap
		if char1 != s2[i] || char2 != s1[i] {
			return false
		}

	}

	// there must be exactly 2 mismatches to allow a swap
	return count == 2
}
