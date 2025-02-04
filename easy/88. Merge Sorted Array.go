package main

// time: O(n + m), space: O(1)
// summary: use 2-pointers to track the 2 arrays and loop through nums1 from the back
func merge(nums1 []int, m int, nums2 []int, n int) {
	// exit if nums2 is empty (no need to do anything)
	if n == 0 {
		return
	}

	// pointers for nums1 (excluding extra space) and nums2
	i1, i2 := m-1, n-1

	// loop through nums1 from the back
	for i := len(nums1) - 1; i >= 0; i-- {
		// exit function after nums2 has done iterating
		if i2 < 0 {
			return
		}

		// if nums1 has done iterating or nums2's number is greater
		// place nums2[i2] at nums1[i]
		if i1 < 0 || nums2[i2] >= nums1[i1] {
			nums1[i] = nums2[i2]
			i2--
		} else {
			// otherwise, place nums1[i1] at nums1[i]
			nums1[i] = nums1[i1]
			i1--
		}
	}
}
