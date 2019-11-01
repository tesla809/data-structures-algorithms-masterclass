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
    return list;
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
  
  // add new head to list- O(n)
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

    let counter;                          // 0 based index
    let currentNode;
    if (index < this.length / 2) {        // is it close to head or tail?
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
}
const list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
// list.push(6);
const x = list.get(4);
console.log(x.data);

// let node1 = new Node(1);  // testing Node class
// let node2 = new Node(2);
// node1.next = node2;       // linking nodes bi directionally
// node2.prev = node1;
