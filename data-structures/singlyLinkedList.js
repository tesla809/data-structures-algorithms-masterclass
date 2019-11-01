// Singly Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {      // doesn't need arguments
    this.head = null;  // no nodes upon construction
    this.tail = null;
    this.length = 0;
  }

  // push()- add node to end of list O(1)
  push(data) {
    let newNode = new Node(data);
    if (!this.head) {              // add 1st node to empty singly linked list
        this.head = newNode;       // its both the head and tail
        this.tail = newNode;       // since n = 1
    } else {                       // if greater than 1
      this.tail.next = newNode;    // set tail to next node
      this.tail = newNode;         // the new node is the tail           
    }
    this.length++;                // like before increment by 1
    return this;                  // return linked list
  }

  // pop- remove end/tail of linked list.
  // No backwards pointer, so we need to go thru linked list 
  // to get new tail. O(n)
  pop() {
    if (this.length === 0) return undefined; // if list is empty aka no head
    
    if (this.length === 1) {                // if only one node
      let currentNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode;
    }

    let prevNode = null;                  // prevNode needed later to set to tail
    let currentNode = this.head;          // start at head

    while (currentNode.next !== null) {   // while don't pass the tail
      prevNode = currentNode;             // move the node forward
      currentNode = currentNode.next;
    }
    this.tail = prevNode;                 // set tail to prevNode 
    this.tail.next = null;                // new tail points to null
    this.length--;
    return currentNode;                   // return popped off node
  }

  // shift- remove head from linked list and return it.
  // 2nd item become head. O(1)
  shift() {
    if (!this.head) return undefined;  // if no head, then can't shift.

    let removedHead = this.head;
    this.head = this.head.next;
    // removedHead.next = null;  garbage collecting in js cleans up, b/c old head will not be used.
    this.length--;
    if (this.length === 0) {    // no elements after operation?
      this.tail = null;         // set tail to null to avoid it being populated w/ last item
    }
    return removedHead;
  }

  // add new head to list- O(1)
  unshift(data) {
    if (data === undefined) return undefined; // if not handled, will increment when nothing passed

    let newNode = new Node(data);
    if (!this.head) {             // if no head aka length equals 0
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;     // set new node pointer to head
      this.head = newNode;          // set new node as head
    }
    this.length++;                  // +1 since new item
    return this;                    // return linked list
  }

  // retrieve node by its position in linked list- O(n)
  get(index) {
    if (typeof index !== 'number') return null;
    if (index > this.length - 1 || index < 0 ) return -1;  // handle out of range index 
    if (index === 0) return this.head;                     // return head if 0
    if (index === this.length - 1 ) return this.tail;      // avoid loop to get to tail.

    let counter = 0;              // 0 based index
    let currentNode = this.head;  // start off at head
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;         // bounded by top if statement, so will be found in range
  }

  // retrieve node by its position in linked list- O(n)
  set (index, data) {
    if (data === undefined) return undefined;    // needs data input

    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.data = data;  // Pro tip: easier if you update data prop inside node 
      return true;            // instead of having to replace node 
    }
    return false;
  }

  // adding a new node at specified position in linked list
  // O(n) to traverse, O(1) to insert
  // array is O(n) to insert (needs re-indexing), O(1) to access
  insert(index, data) {
    if (data === undefined) return undefined;             // needs data input
    if (index < 0 || index > this.length) return false;   // handle out of bounds
    if (index === 0) return !!this.unshift(data);         // if head add to front. !! creates boolean that is returned
    if (index === this.length) return !!this.push(data);  // if beyond tail, added to end

    let newNode = new Node(data);                       // inserting between head and tail 
    let prevNode = this.get(index - 1);                 // get previous node in index to link to newNode
    let currentNode = prevNode.next;                    // current node in index
    prevNode.next = newNode;                            // prevNode -> newNode
    newNode.next = currentNode;                         // newNode -> currentNode, 
    this.length++;
    return true;                                        // so prevNode -> newNode -> currentNode
  }
  // remove and return element based on its index position- O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return false;  // if out of range -> false
    if (index === 0) return this.shift();                 // if heads. !! turns value into boolean
    if (index === this.length - 1) return this.pop();     // if tail. 
    
    let prevNode = this.get(index - 1);                   // Get node before index, since we don't have backwards pointer
    let removedNode = prevNode.next;                      // get target node to return
    prevNode.next = prevNode.next.next;                   // remove node by skipping over target. Set prev to node after target index. 
    this.length--;                                        // prevNode -> prevNode.next.next (skipped target)
    return removedNode;
  }
  // reverse linked list in place- O(n)
  // no copy or duplicate made- traverse and reverse
  // insert head node between tail and node right after tail len - 1 times.
  altReverse(){
    if (this.length <= 1) return this; // corner case of 1 or less times
    if (this.length === 2) {          // corner case of 2 items only
      this.push(this.shift());        // take head and push to end of list
      return this;                    // needed to avoid logic error below since only 2 times
    }
    let counter = 0; 
    let newTail = this.head           // take old head and turn to new tail
    let anchorNode = this.tail;       // start postion to insert
    let prevNode = null;              // end position to insert
    let movedNode = null;             // node to be inserted betwen start and end
    while (counter < this.length - 1) {
      movedNode = this.shift();       // remove head
      anchorNode.next = movedNode;    // add after tail/anchor node
      movedNode.next = prevNode;      // add to node right after it, aka sandwich it in middle
      prevNode = movedNode;           // will be new end position to insert movedNode before.
      counter++;
      this.length++;                  // needed to counter reduction of length with shift
    }
    this.tail = newTail;
    return this;
  }
  // alternative way to do reverse
  // basically flipping pointer backwards by setting .next to prev
  // and moving forward by moving prev and node thru each node
  reverse() {
    let node = this.head;     // switch head and tail nodes
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;          // tail needs to be null at the end
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;            // move one node over
      node = next;
    }
  }
  // dev helper method to visualize linked list
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

/*
  Overview:
  Insertion/Removal: 
    Best: O(1)
    Worst: O(N)
    Note, act of inserting/removing is O(1)
    but still needs to traverse to find node, so O(N).
  Searching/Access:
    Best: O(1)
    Worst: O(N)

  Recap:
  Singly Linked Lists are excellent alternative to arrays 
  when inserting or deleting at the beginning or end 
  is frequent.

  The idea of list data structure that consists of nodes
  is the foundation for other data structures like 
  Stack and Queues.

  Arrays contain a built in index, since the entire array
  is placed together in memory. 

  Because of this, the computer has to specify the amount
  of space needed upfront. In JavaScript, this is done behind the scenes.

  However, because of this arrays allow for random access, 
  so one can get nth element in constant time, O(1).

  If we need more than what was allocated, we have to copy 
  the entire array and place it into another array with more space.
  Thats O(n) time.

  If we remove an element from the beginning of an array, 
  we have to re-index the entire array.
  This takes O(n) time.
  Again JavaScript does this behind the scenes for us.

  Arrays are good for when you know how much data you will
  have upfront or need random access in constant time.

  Both Singly and Doubly Linked Lists don't need specific
  chunk of memory upfront. Instead they can grow dynamically,
  without the need to re-allocate memory.

  The downside is that to get to anything besides the head or tail,
  requires traversing the linked list which is O(n).

  Getting the head or tail is constant time O(1).

  Adding to beginning or end of linked list is O(1)

  Adding/removing elements into middle of Linked Lists is O(1),
  but since no random access to search, it is and additional O(n).
*/

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.print();
list.reverse();
list.print();
console.log(list);


// not efficent way to write linked list
// let firstNode = new Node("Hi");
// firstNode.next = new Node("there");
// firstNode.next.next = new Node("friendly");
// firstNode.next.next.next = new Node("person");
