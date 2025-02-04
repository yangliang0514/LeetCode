package main

// my solution
// time: O(n), space: O(1)
// summary: loop through and sum up the ascending subarrays
func maxAscendingSum(nums []int) int {
	// store the max sum found and the current ascending subarray sum
	max, currMax := 0, 0

	for i, num := range nums {
		// if the current num is lesser the next num
		if i+1 < len(nums) && num < nums[i+1] {
			// adds the current num to the running sum
			currMax += num
			continue
		}

		// the current num is the last number is the ascending subarray
		// so adds the last one
		currMax += num

		// update max if the current sum is greater
		if currMax > max {
			max = currMax
		}

		// reset the current sum
		currMax = 0
	}

	// return the max sum
	return max
}
