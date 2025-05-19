// https://leetcode.com/problems/minimum-window-substring/

package main

// time: O(m + n) -> len(s) + len(t), space: O(u) -> the unique characters in t and s
// summary: find the unique characters in `t`, then use sliding window to find the minimum window in `s` that meets the condition
func minWindow(s string, t string) string {
	// declare 2 frequency maps
	sFreq, tFreq := map[byte]int{}, map[byte]int{}

	// build `t` frequency map
	for i := range len(t) {
		tFreq[t[i]]++
	}

	uniqChars := len(tFreq) // the number of characters that needs to be matched
	matchedChars := 0       // the number of characters that's currently matched

	start, minStart := 0, 0 // start is the moving pointer, minStart is the start index of the minimum window
	minLen := len(s) + 1    // the length of the minimum window

	// iterate through `s`
	for i := range len(s) {
		// build up the `s` frequency map along the way
		sFreq[s[i]]++

		// if the current character is in `t` and the frequency matches, increment the matchedChars
		if tFreq[s[i]] > 0 && sFreq[s[i]] == tFreq[s[i]] {
			matchedChars++
		}

		// if the number of matched characters is less than the number of unique characters
		// then we haven't found the valid window yet
		if matchedChars < uniqChars {
			continue
		}

		// when a valid window is found, shrink from the left to find the minimum window
		for matchedChars == uniqChars {
			currLen := i - start + 1

			// if the current window is smaller than the minimum window, update the minimum window
			if currLen < minLen {
				minLen = currLen
				minStart = start
			}

			// if the left most character in the current window matches the frequency of `t`
			// we're eliminating a matched character
			if tFreq[s[start]] > 0 && sFreq[s[start]] == tFreq[s[start]] {
				matchedChars--
			}

			// shrink the window from the left
			// move the start pointer to the right and decrement the frequency of the character
			sFreq[s[start]]--
			start++
		}

	}

	// return empty string if no valid window is found
	if minLen > len(s) {
		return ""
	}

	return s[minStart : minStart+minLen]
}
