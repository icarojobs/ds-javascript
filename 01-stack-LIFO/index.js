/*
    STACK works with LIFO concept
    LIFO = Last Into, First Out

    STACK INTERFACE
    1. Constructor Function
        - Storage
    2. Methos
        - push(value): adds value to the front, return size of stack
        - pop(): removes value from front, returns value
        - size(): returns size of stack as an integer
*/

// Defining pseudo-class
function Stack(capacity) {
    this._capacity = capacity || Infinity
    this._storage = {}
    this._count = 0
}

// Defining methods
Stack.prototype.push = function(value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value
        return this._count
    }

    return `Max capacity of stack already reached! Remove element before adding a new one.`
}

Stack.prototype.pop = function() {
    const value = this._storage[--this._count]
    delete this._storage[this._count]
    if (this._count < 0) {
        this._count = 0
    }
    return value
}

Stack.prototype.size = function() {
    return this._count
}

// Aditional Method - get last element from collection.
// Like pop, but do not remove element from collection
Stack.prototype.peek = function() {
    return this._storage[--this._count]
}

// WORKING WITH

// Creating a new stack of 5 position
const stack = new Stack(5)

console.log( stack.push('Icaro') ) // 1
console.log( stack.push('Vera') ) // 2
console.log( stack.push('Victor') ) // 3
console.log( stack.push('Willem') ) // 4
console.log( stack.push('Eduardo') ) // 5

// Removing elements
console.log( stack.pop() ) // Eduardo
console.log( stack.pop() ) // Willem

// Showing stack size
console.log( stack.size() ) // 3

// Showing last element added to collection
console.log( stack.peek() ) // Victor