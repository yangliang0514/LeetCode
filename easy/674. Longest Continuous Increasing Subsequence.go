// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

package main

// time: O(n), space: O(1)
// summary: iterate through the array and increment the current length if in increasing order
func findLengthOfLCIS(nums []int) int {
	curr := 1
	max := curr

	// iterate through the array
	for i := 1; i < len(nums); i++ {
		// if the current number is less than the previous number, update the max and reset the current length
		if nums[i] <= nums[i-1] {
			max = findMax(max, curr)
			curr = 1
			continue
		}

		// increment the current length
		curr++
	}

	// return the larger of the max and current in case it's in increasing order to the last element
	return findMax(max, curr)
}

// ---------- HELPER FUNCTION ----------
func findMax(a, b int) int {
	if a > b {
		return a
	}

	return b
}
