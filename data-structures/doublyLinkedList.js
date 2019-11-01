// Doubly Linked List
// two pointers: prev and next 
// each node points in two directions
// takes up more memory, but we get more flexibility
// Almost always a trade off

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push()- add new node to end of doubly linked list O(1)
  push(data) {
    const newNode = new Node(data);
    if(!this.head) {                // add 1st node to empty doubly linked list
      this.head = newNode;
      this.tail = newNode;
    } else { 
      this.tail.next = newNode;    // set tail to next node
      newNode.prev = this.tail;    // set newNode prev to tail
      this.tail = newNode;         // the new node is the tail    
    }
    this.length++;
    return this;
  }

  // pop- remove end/tail of linked list. 0(1)
  // .prev points backwards so easier.
  pop() {
    if (this.length === 0) return undefined; // if list is empty aka no head
    
    if (this.length === 1) {                 // if only one node
      let currentNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode;
    }
    const poppedOff = this.tail;    // to be removed and returned
    this.tail = this.tail.prev;     // set tail to previous node
    this.tail.next = null;          // remove link to old tail
    // poppedOff.prev = null;          // remove old tail link to prev node 
    this.length--;                  
    return poppedOff;
  }
  // shift- remove head from doubly linked list, returns it.
  // 2nd item become head. O(1)
  shift() {
    if (!this.head) return undefined;  // if no head, then can't shift.
    const removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.prev = null;
      removedHead.next = null;
    }
    this.length--;
    return removedHead;
  }
  
  // add new head to list- O(1)
  unshift(data) {
    if (data === undefined) return undefined; // if no value passed in, return undefined

    const newNode = new Node(data);
    if(!this.head) {                 // if no head aka length equals 0
      this.head = newNode;
      this.tail = newNode;
    } else {                        // if there are nodes present
      this.head.prev = newNode;     // newNode <- head
      newNode.next = this.head;     //         -> 
      this.head = newNode;          // newNode === new head <-> old head <-> ... 
    }
    this.length++;
    return this;
  }

  // retrieve node by its position in linked list- O(n)
  get(index) {
    if (typeof index !== 'number') return null;          // handle invalid input 
    if (index < 0 || index >= this.length) return null;  // handle out of range
    if (index === 0) return this.head;                   // return head if 0
    if (index === this.length - 1 ) return this.tail;    // return tail if last index

    let counter, currentNode;
    if (index <= this.length / 2) {        // is it close to head or tail?
      counter = 0;
      currentNode = this.head;            // start off at head
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;        // start from tail and work backwards
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;         // bounded by top if statement, so will be found in range
  }

  // retrieve node by its position in linked list- 
  // O(n) to search, O(1) to replace
  set(index, data) {
    if (data === undefined) return undefined;  // needs data input
    
    let foundNode = this.get(index);           // re-use get(). 
    if (foundNode) {
      foundNode.data = data;                   // Pro tip: easier if you update data prop inside node 
      return true;                             // instead of having to replace node 
    }
    return false;
  }

  // insert()- adding a new node at specified position in linked list
  // O(n) to traverse, O(1) to insert
  // array is O(n) to insert (needs re-indexing), O(1) to access
  insert(index, data) {
    if (data === undefined) return undefined;             // needs data input
    if (index < 0 || index > this.length) return false;   // handle out of bounds
    if (index === 0) return !!this.unshift(data);         // if head add to front. !! creates boolean that is returned
    if (index === this.length) return !!this.push(data);  // if beyond tail, added to end

    let newNode = new Node(data);
    let afterNode = this.get(index);       // re-use get()
    let preNode = afterNode.prev;

    preNode.next = newNode;     // preNode -> newNode
    newNode.prev = preNode;     // preNode <- newNode, now preNode <->newNode
    newNode.next = afterNode;   // newNode -> afterNode
    afterNode.prev = newNode;   // newNode <- afterNode, now preNode <-> newNode <-> afterNode
    this.length++;
    return true;
  }
  // remove()- remove element from list w/ index.
  // O(n) to traverse, O(1) to remove
  remove(index) {
    if (index < 0 || index >= this.length) return false;   // if out of range -> false
    if (index === 0) return this.shift();                  // if heads.
    if (index === this.length - 1) return this.pop();      // if tail.
    
    let removedNode = this.get(index); 
    let preNode = removedNode.prev;
    let afterNode = removedNode.next;

    preNode.next = afterNode;     // pre -> after 
    afterNode.prev = preNode;     // pre <- after, so pre <-> after 
    removedNode.next = null;      // clean up foundNode pointers
    removedNode.prev = null;
    this.length--;
    return removedNode;   
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
  Doubly Linked Lists are almost identical to Singly Linked Lists,
  except that tehre is an addiitonal an pointer to the previous node.
  
  Better than Singly Linked Lists for finding nodes.
  They are done in half the time.

  Downside is that they take up more memory due to extra pointer.
*/

const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
const x = list.remove(1);
console.log(x);
// let node1 = new Node(1);  // testing Node class
// let node2 = new Node(2);
// node1.next = node2;       // linking nodes bi directionally
// node2.prev = node1;
