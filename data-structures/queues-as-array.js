// queues- as array
const queue = [];
queue.push("first");  // enqueue- add to tail
queue.push("second");
queue.push("third");

queue.shift();  // dequeue- remove from front
queue.shift();  // removing from front of array re-indexes array- O(n), not good
queue.shift();

queue.unshift("first");  // add to front- still re-indexing entire queue- O(n0)
queue.unshift("second");  // no way around this using array
queue.unshift("third");  // perhaps turning value to null, and having variable that holds current head.

queue.pop();  // dequeue- remove from back
queue.pop(); 
queue.pop();  

/*
Queues ADT
A list or colleciton with the restriction that 
insertion must be performed at rear and 
deletion must be performed at the front.

A queue is basically a line. The first person in is the 
first person served/leaves.

FIFO principle- first in, first out.

Methods:
all methods are O(1)
enqueue()- add to back/tail
dequeue()- remove and return from head
front/peak()- return head, but don't remove
isEmpty()- check if empty 

Queue essentials:
Enqueue and dequeue are essential for a queue. 
Elements must be added from rear and removed from front.

           -------
Enqueue ->          Dequeue ->
           -------

Most of the time languages already have implementations 
of queue. JS doesn't have one.

Uses:
Used in scenarios where there is a shared resource, 
but the resource can only handle one request at a time.

The request that comes first, gets served first.

Used in printer jobs, processor for computer,
network requests, scheduling, 
web servers processing requests,
in JS for how functions are executed.

Web servers have a request queue that handles 
the lifecycle of the request: 
-incoming request queue
-processing request queue
-outgoing request queue

In OS, has multi-level priority queue, 
which schedules processes to be divided up 
based on priority order, 
and then for queues to be executed based 
their level of importance.

Similar to Stacks:
stack.push() -> queue.enqueue()
stack.pop() -> queue.dequeue()
stack.size() -> queue.size()
stack.isEmpty() -> queue.isEmpty()

Implementation:
Array-
Depending on situation, can be bad implementation tool.
Can run out of memory if we don't know size of queue before hand.
As array goes, time complexity of accessing and removing elements 
increases. Adding to the front also means re-indexing everything. 
That would create an O(n). 

one verison of Pseudo code:- All O(1)
Have markers front and rear on array.
To add increment rear by 1. add element to rear of array
To remove, increment front by 1. remove element at front of array.
Front and rear are initally -1.
ifEmpty, front and rear === -1 ? true : false
enqueue(x), 
  if rear == size -1, queue full, exit
  else if isEmpty, front <- rear <- 0
  else rear <- rear + 1
  A[rear] <- x
dequeue(x),
  if isEmpty, return 
  else if front == rear, (only one element)
    front <- rear <-  -1
  else, 
    front <- front + 1
  (remove element?)

The problem with array is that the more we dequeue,
the less cells in queue we have to work with.
We would have to reindex the array from front 
if we need to use it, which is O(n)

Or we would have to use a circular array.
0 -> n -> 0. So circular.

To make circular array:
next position: (i + 1) % number of elements in array
for any element not i = n - 1, the modulo
won't have any effect.
For i = n - 1, it will reset to i = 0. 

previous position: (i + n - 1) % n.
+n makes it always positive.

With circular arrary we can increment rear
as long as there is space.

Implementation with circular array- All O(1)
Front and rear are initally -1.
ifEmpty, front and rear === -1 ? true : false
enqueue(x), 
  if (rear + 1) % size of array == front,
    queue full so, exit, return
  else if isEmpty, front <- rear <- 0
  else rear <- (rear + 1) % size of array
  A[rear] <- x
dequeue(x),
  if isEmpty, return 
  else if front == rear, (only one element)
    front <- rear <-  -1
  else, 
    front <- (front + 1) % size of array
  (remove element?)
front()
  return A[front]

Linked list-
Better implementation since re-sizing happens dynamically,
since they do not have a fixed size.
Maintaining refereces to opposite ends of queue 
makes enqueue and dequeue easier. This creates an O(1). 

Arrays have a fixed size of memory and if unfilled, 
goes wasted and unable to be used by the rest of the
computer. Linked Lists avoid this, since only the memory
that is used is allocated to it.

Better to add at tail, and remove at head.
If we keep a reference to the tail, we can just 
append to tail and the node points to null.
If we remove or dequeue from front, all we 
do is reset the head to next element.
*/
