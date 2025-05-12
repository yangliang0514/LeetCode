// https://leetcode.com/problems/palindrome-linked-list/
package main

type ListNode struct {
	Val  int
	Next *ListNode
}

// time: O(n), space: O(1)
// summary: split the list into half, reverse the second half and compare the 2 lists
func isPalindrome(head *ListNode) bool {
	// return true if there is only one node (it's guaranteed to have at least one)
	if head.Next == nil {
		return true
	}

	slow := head
	fast := head

	// find the node in the middle (slow will point at the head of the second list)
	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	// get the head of the first half and the head of the reversed second half
	head1 := head
	head2 := reverseList(slow)

	// compare the 2 lists, all nodes should have the same value
	for head1 != nil && head2 != nil {
		// return false if the values don't match
		if head1.Val != head2.Val {
			return false
		}

		head1 = head1.Next
		head2 = head2.Next
	}

	// return true if we never find 2 nodes with different values
	return true
}

func reverseList(head *ListNode) *ListNode {
	var prevNode *ListNode
	var currentNode = head

	for currentNode != nil {
		nextNode := currentNode.Next

		currentNode.Next = prevNode
		prevNode = currentNode
		currentNode = nextNode
	}

	return prevNode
}
