/*
    QUEUES works with FIFO concept
    FIFO = First Into, First Out

    STACK INTERFACE
    1. Constructor Function
        - Storage
    2. Methos
        - enqueue(value): adds value to the back, return size
        - dequeue(): removes value from front, returns value
        - count(): returns size of queue as an integer
*/

// Defining pseudo-class
function Queue(capacity) {
    this._capacity = capacity || Infinity
    this._storage = {}
    this._head = 0
    this._tail = 0
}

// Defining methods
Queue.prototype.enqueue = function(value) {
    if (this.count() < this._capacity) {
        this._storage[this._tail++] = value
        return this.count()
    }

    return `Max capacity of queue already reached! Remove element before adding a new one.`
}

Queue.prototype.dequeue = function() {
    const element = this._storage[this._head]
    delete this._storage[this._head]
    if (this._head < this._tail) this._head++
    return element
}

Queue.prototype.count = function() {
    return this._tail - this._head
}

// Aditional Method - get first element from collection.
Queue.prototype.peek = function() {
    return this._storage[this._head]
}

// Aditional Method - check if queue contains value of parameter
Queue.prototype.contains = function(value) {
    for (let i = this._head; i < this._tail; i++) {
        if (this._storage[i] === value) return true
    }
    return false
}

// Aditional Method - check which position value of parameter is
Queue.prototype.until = function(value) {
    for (let i = this._head; i < this._tail; i++) {
        if (this._storage[i] === value) return i-this._head+1
    }
    return null
}


// WORKING WITH

// Creating a new stack of 5 position
const queue = new Queue(5)

console.log( queue.enqueue('Icaro') ) // 1
console.log( queue.enqueue('Vera') ) // 2
console.log( queue.enqueue('Victor') ) // 3
console.log( queue.enqueue('Willem') ) // 4
console.log( queue.enqueue('Eduardo') ) // 5

// Removing first elements of queue
console.log( queue.dequeue() ) // Icaro
console.log( queue.dequeue() ) // Vera

// Get first element of queue (1)
console.log( queue.peek() ) // Victor

// Count elements on queue
console.log( queue.count() ) // 3

// Check if Icaro element exists on queue
console.log( queue.contains('Icaro') ) // false

// Check which position Willem is (2)
console.log( queue.until('Willem') ) // 2