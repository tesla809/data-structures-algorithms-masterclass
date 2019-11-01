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

  // add new head to list- O(n)
  unshift(data) {
    if (!data) return undefined;  // if not handled, will increment when nothing passed

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
    if (!data) return null;    // needs data input

    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.data = data;  // Pro tip: easier if you update data prop inside node 
      return true;            // instead of having to replace node 
    }
    return false;
  }

  // adding a new node at specified position in linked list- O(n)
  insert(index, data) {
    if (index < 0 || index > this.length) return false; // handle out of bounds

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
    if (index === 0) return this.shift();               // if heads. !! turns value into boolean
    if (index === this.length - 1) return this.pop();   // if tail. 
    
    let prevNode = this.get(index - 1);                   // Get node before index, since we don't have backwards pointer
    let removedNode = prevNode.next;                      // get target node to return
    prevNode.next = prevNode.next.next;                   // remove node by skipping over target. Set prev to node after target index. 
    this.length--;                                        // prevNode -> prevNode.next.next (skipped target)
    return removedNode;
  }
}
const list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);
let x = list.remove(1);
console.log(x);
console.log(list);

// not efficent way to write linked list
// let firstNode = new Node("Hi");
// firstNode.next = new Node("there");
// firstNode.next.next = new Node("friendly");
// firstNode.next.next.next = new Node("person");
