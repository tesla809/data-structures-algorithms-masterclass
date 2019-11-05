// stacks data structure- array implementation
let searchStack = [];  // adding to end is better w/ arrays since no need to reindex array O(1)
searchStack.push('google');  // adding to end with push, pop
searchStack.push('instagram');
searchStack.push('youtube');
console.log(stack);
searchStack.pop();  // only using push and pop in an array creates a stack, LIFO

let photoshopStack = [];  // adding to begining not good due to having to reindex all of array, O(n)
stack.unshift("create new file");  // adding to beginning w/ shift(), unshift()
stack.unshift("resized file");
stack.unshift("cloned out wrinkle");
stack.shift();  // only using shift and unshift in an array creates a stack, LIFO

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