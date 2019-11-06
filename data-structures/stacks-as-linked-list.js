// Stacks data structure- linked list implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;  // first instead of head
    this.last = null;   // last instead of tail
    this.size = 0;
  }

  // just shift code from singly linked list
  // remove from top of stack
  pop() {
    if (!this.first) return null;  // if no first, then can't shift.

    let removedTop = this.first;
    // removedTop.next = null;  garbage collecting in js cleans up, b/c old first will not be used.
    if (this.first === this.last) {   // only 1 element left?
      this.last = null;               // set last to null to avoid it being populated w/ last item
    }
    this.first = this.first.next;     // set to null or next element
    this.size--;
    return removedTop;
  }

  // just unshift code from singly linked list
  // add to top of stack- O(1)
  push(data) {
    if (data === undefined) return undefined; // if not handled, will increment when nothing passed

    let newNode = new Node(data);
    if (!this.first) {             // if no first aka length equals 0
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;     // set new node pointer to first
      this.first = newNode;          // set new node as first
    }
    this.size++;                  // +1 since new item
    return this.size;             // return size
  }

  topPeek() {
    return this.first;
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
  
}

let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack.isEmpty());
console.log(newStack);

const x = newStack.pop();
const y = newStack.pop();
const z = newStack.pop();
console.log(x);
console.log(y);
console.log(z);
console.log(newStack.isEmpty());
console.log(newStack);

newStack.push(1);
newStack.push(2);
newStack.push(3);

console.log(newStack.topPeek());

/*
Stack ADT (abstract data type)
A list/collection with the restriction that insertion 
and deletion can only be performed from 
one end, the top. 

A list/collection with LIFO principle, 
last in, first out.

The last element is the first one out.

Think of a stack of books or the
Tower of Hanoi.

Operations:
All methods are O(1)
push() - add to top of stack
pop() - remove and return top of stack
Top() - peek the top, don't remove
isEmpty() - true/false
length() - amount of elements

The two main things that you have to care about
in a stack are push() and pop().

These are O(N)
Searching- look for element
Access- accessing element

Uses:
Function calls/Recursion
Browser history
undo operations in text editors
used in algorithms: balanes parentheses for compilers
call stack

Implementation:
JavaScript doesn't come with an implemention 
of a stack.

You can implement it with an array or linked list.
An linked list allows you to increase size of stack 
beyond the fixed memory allocation of an array.

Adding to beginning of array in stack implementation 
is O(n), since we have to re-index all of the elements.
Best to add to the end, since its O(1).

If you care about efficency, all you really need is 
LIFO property. We won't care about accessing info 
based off of index, since that would mean taking things
from middle of the stack. So, its better to use a linked list 
since it can grow dynamically.

If using linked list, insert at head.
Removing at tail will be O(n) b/c
you have to traverse to second to last node.
Why? You remove the last node, then you 
have to update the tail property with the 
new last node.

Better to add/remove from the head, since 
its one direction, O(1).

You could use a doubly linked list, but 
that would take up more memory.
*/