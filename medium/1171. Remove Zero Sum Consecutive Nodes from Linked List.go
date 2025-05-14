// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/

package main

type ListNode struct {
	Val  int
	Next *ListNode
}

// time: O(n), space: O(n)
// summary: use a map to store the sum up until each node, if 2 nodes share the same sum, everything in between can be deleted
func removeZeroSumSublists(head *ListNode) *ListNode {
	// make a dummy node for easier looping
	dummy := &ListNode{Next: head}

	// calculate the sum from first to each node and map the sum to the node
	sum := 0
	sumToNode := map[int]*ListNode{}

	// loop through to map the sum
	for currentNode := dummy; currentNode != nil; currentNode = currentNode.Next {
		sum += currentNode.Val
		sumToNode[sum] = currentNode // this will overwrite any previous node with the same sum
	}

	// reset the sum so we can use it again
	sum = 0

	// loop through the second time to rewire the list
	for currentNode := dummy; currentNode != nil; currentNode = currentNode.Next {
		// calculate the sum again and get the corresponding node
		sum += currentNode.Val
		nextNode := sumToNode[sum]

		// if the node doesn't match the current node, means everything in between sums up to 0 so they can all be deleted
		if currentNode != nextNode {
			currentNode.Next = nextNode.Next
		}
	}

	return dummy.Next
}
