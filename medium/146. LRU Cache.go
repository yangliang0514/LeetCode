// https://leetcode.com/problems/lru-cache/

// my solution
// summary: use a map with a doubly linked list to store and manage key values

package main

import "container/list"

// stores a hash map for fast key lookups and a doubly linked list for tracking usage order
type LRUCache struct {
	nodeMap  map[int]*list.Element
	nodeList *list.List
	capacity int
}

// stores the key-value pair in the doubly linked list
type Node struct {
	key   int
	value int
}

func newNode(key, value int) *Node {
	return &Node{
		key:   key,
		value: value,
	}
}

func Constructor(capacity int) LRUCache {
	return LRUCache{
		nodeMap:  make(map[int]*list.Element, capacity),
		nodeList: list.New(),
		capacity: capacity,
	}
}

func (this *LRUCache) Get(key int) int {
	// get the node from the map
	el, ok := this.nodeMap[key]

	// return -1 if the key doesn't exists
	if !ok {
		return -1
	}

	// move the node to the front since it's recently used
	this.nodeList.MoveToFront(el)

	return el.Value.(*Node).value
}

func (this *LRUCache) Put(key int, value int) {
	// get the node from the map
	el, ok := this.nodeMap[key]

	// if the key doesn't exist in the map
	if !ok {
		// create a new node for the key-value pair
		node := newNode(key, value)

		// evict the least recently used node if cache is full
		this.maybeEvictLeastUsed()
		// add the new node to the front of the list
		listEl := this.nodeList.PushFront(node)
		// sets the key to the map
		this.nodeMap[node.key] = listEl
		return
	}

	// if the key does exist
	// updates the value and move it to the front of the list
	el.Value.(*Node).value = value
	this.nodeList.MoveToFront(el)
}

// evicts the least recently used node if the cache is full
func (c *LRUCache) maybeEvictLeastUsed() {
	if c.nodeList.Len() >= c.capacity {
		lastNode := c.nodeList.Back()
		// remove the corresponding key from the map
		delete(c.nodeMap, lastNode.Value.(*Node).key)
		// remove last node from the list
		c.nodeList.Remove(lastNode)
	}
}
