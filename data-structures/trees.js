// Trees
// implement a binary search tree

// Note: self balancing trees can be
// implemented with AVL trees

class Node {
  constructor(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;  // only one important property
  }

  // O(log(n)) - base 2 - not guaranteed
  insert(data, prevNode) {      // recursive solution
    let node = new Node(data);  // create new data
    let currentNode = prevNode === undefined ? this.root : prevNode; // no prevNode? Start at root. 
    let dir;                    // set direction, either left or right

    if (this.root === null) {  // if no root, set to root
      this.root = node;        // set node
      return this;             // return this
    } 
    dir = node.data < currentNode.data ? 'right' : 'left';
    if (currentNode[dir]) {                 // check if direction exists
      currentNode = currentNode[dir];      // update currentNode to direction
      return this.insert(node.data, currentNode);   // recursively call again                    
    } else {
      currentNode[dir] = node;             // if direction node doesn't exist, set to node 
    }
    return this;  // if no case matches, return BST. handles duplicate numbers
  }

  // O(log(n)) - base 2 - not guaranteed
  find(data, prevNode) {  // find and return node, else -1
    if (this.root === null) {  // if no root, nothing to search
      return false;
    }

    let node = new Node(data);  // create new data
    let currentNode = prevNode === undefined ? this.root : prevNode; // no prevNode? Start at root. 
    let dir; 

    dir = node.data < currentNode.data ? 'right' : 'left';
    
    if (this.root.data === data) {
      console.log('FOUND IN ROOT');
      return this.root;
    }

    if (currentNode[dir]) {
      if (currentNode[dir].data === data) {
        console.log('FOUND DATA', currentNode[dir].data);
        return currentNode[dir];
      } else {
        currentNode = currentNode[dir];      // update currentNode to direction
        return this.find(node.data, currentNode);   // recursively call again   
      }
    }

    return false;  // if no conditions met, not found, return false
  }

  contains(data) {  // checks to see if data exists
    if(this.root === undefined) return undefined;
    let current = this.root,
        found = false;
    while(current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return true;
      }
    }
      return false;
  }

  getTree() {
    return this;
  }

  getRoot() {
    return this.root;
  }
  showTree() {
    console.log(this.getTree());
  }

  showRoot() {
    console.log(this.getRoot());
  }
}

const newBST = new BinarySearchTree();
newBST.insert(10);
newBST.insert(11);
newBST.insert(7);
newBST.insert(2);

let test = newBST.remove(11);
console.log(test);

newBST.showTree();


/*
Tree ADT (abstract data type)
A non linear collection of entities called nodes, 
linked together to simulate a hierarchy. 

Each node contains some data of any type and may contain
a link or reference to another node (its children).

The links are one way, not bi-directional.

See interactive version:
https://visualgo.net/en/bst?slide=1

Principle: 
Trees are useful to represent hierarchical data. 

It is a hierarchical data structure, as opposed to a 
linear data structure.

They look like this:
      * <- root
    /   \
    *    *  <- parent of nodes below (also child of root)
  / \   / |\
  *  * * * *  <- leaf/child node
    /\  ...
    ... 

The asterisks represent nodes. 
The node at the top is the root, the tree's ``starting point.
The arcs between nodes are called branches. 
A node that has no branches underneath it is called a leaf. 

Real trees grow from their root upwards to the sky,
but computer-science trees grow from the root downwards.

Advantages of Trees:
- Useful to reflect structural relationship in data
- Useful to represent hierarchies
- Great for oragnzing data for quick search, insertion/deletion
  Binary search trees are useful for this, O(log(n))
- Very Flexible data, allowing to move subtrees with minimum effort.

Linear vs Trees:
Linear data structures (lists, queues, stacks arrays) 
are organized in linear/sequential way.

Linear data structures are useful for ordering things
based on priority and sorting.

Trees are non linear, and useful to 
represent hierarchical data. 

Applications:
- Storing naturally hierarchical data: family trees, DOM, file systems, etc.
- Organizing data for quick search, insertion, deletion: 
  binary search trees (BST) can give O(log(n)) time for searching element
  with each operation we remove 1/2 of all nodes due to the way 
  the BST is ordered.
-Trie trees: for dynamic spell checking, dictionaries
-Network routing algorithms


Applications in-depth:
  (Source: http://people.cs.ksu.edu/~schmidt/300s05/Lectures/Week7b.html)

Example application 1:
Trees can hold objects that are located by keys that are sequences. 
For example, we might have some books with these Library of Congress 
catalog numbers:
QA76  book1
QA7   book2
Q17   book3
B1    book4
Z4    book5

The books's keys are sequences, and the sequences label 
the branches of a tree that holds the books:
           *
           |
   +-------+----------+
 B |     Q |        Z |
   *       *          *
 1 |    1 /  \ A    4 |
 book4   *    *     book5
       7 |    | 7
      book3  book2
              | 6
             book1

Books can be stored at nodes or leaves, 
and not all nodes hold a book (e.g., Q1). 
This tree is called a spelling tree, and it has the advantage 
that the insertion and retrieval time of an object is related only 
to the length of the key.

Example application 2:
A tree can represent a structured object, such as a house that must be explored 
by a robot or a human player in an adventure game:

house's entrance----upper hallway----bedroom---closet---...
 |                  |          |
 |                  |          +-----private bath---...
 |                  +---study---...
 |
 lower hallway---kitchen---...
            |
            +---lounge---...
We might imagine a robot entering the house at its entrance, 
knowing nothing about what lies inside. The robot's data base looks like this:

-> house's entrance

Perhaps the robot explores the upper hallway, bedroom, and private bath. 
Its data base expands with the knowledge learned during the exploration:

-> house's entrance----upper hallway----bedroom---closet---...
                               |
                               +-----private bath---...

As the robot explores more and more of the house, its database, a tree, grows to include the knowledge. A tree structure is useful for holding the knowledge, because trees can grow dynamically, spawning branches and subtrees as needed.
A tree like the one above is sometimes called a search tree. Indeed, the search trees seen in the earlier lectures on stacks and queues also fit into this category.

Example application 3:
Trees are used to represent phrase structure of sentences,
which is crucial to language processing programs. 
Here is the phrase-structure tree (``parse treee'') for the Java statements

int x;
x = 3 + y;

              STATEMENT SEQUENCE
             /                  \
  DECLARATION              ASSIGNMENT
   /       \                /      \
TYPE  VARIABLE         VARIABLE    EXPRESSION
 |       |                |       /     |   \
int      x                x     NUMERAL + VARIABLE
                                 |          |
                                 3          y
The Java compiler checks the grammatical structure of a Java program 
by reading the program's words and attempting to build the program's parse tree. 
If successfully contructed, the parse tree is used as a guide to help 
the Java compiler generate the byte code that one finds 
in the program's .class file.

Terms:
Link: connection between nodes. 
  Not bi-directional
  There are n-1 links in tree, n = number of nodes.
  That is because Root does a parent node that it links to 
Root: top most node which other nodes are linked to. 
  Has no parent node of its own.
Parent: node that connects to sub nodes.
  Can have multiple children. 
  Multiple links allowed
Child: node that connects to parent.
  Has only 1 parent.
  Only 1 incoming link allowed
Siblings: Nodes with the same parent.
Internal Node: Nodes with at least one child.
  Basically any parent node.
Leaf: Node with no children. 
Ancestor: Node further up the tree than node in question. 
  A is parent (or grand parent, etc.), B is child.
  A is ancestor of B.
Descendant: Node further down the tree than node in question. 
  A is parent (or grand parent, etc.), B is child.
  B is descendant of A.

Other relations:
Cousin: Nodes with same grand parent
Uncle: Sibling of parent node of node.
Grand parent: Parent of parent
Grand child: Child of Child
Sub tree: a node and all its descendents
  Ignoring the node’s parent, this is itself a tree
Ordered tree: tree with defined order of children
enables ordered enables ordered traversal traversal

Important properties:
Height: number of links in a path from node to farthest leaf. 
  goes down to farthest leaf.
  Downward towards end
  # of links from x -> farthest leaf node
  
Depth: number of links from node to root. 
  goes up to root.
  Upward towards root.
  # of links from root -> x

Height and Depth are the two important properties of a tree. 
They tell us how the tree looks like with two simple metrics.
The height of root is height of the tree.

Height and depth of node may not be the same.

Methods:
root(): returns root
parent(n): return parent of node
children(n): returns children of n
size(): returns number of nodes
elements(): returns all elements
positions: returns all postions/nodes
swapElements(n, m): swaps elements at two nodes
replaceElement(n, r): replaces element of node
insertion(n): inserts an element

Utility methods:
isInternal(n): check if node is internal
isExternal(n): check if node is external
isRoot(n): check if its root

Properties:
1. Recursive data structure:
  Since trees can have sub-tree nested within them.

  More formally, a structure that consists of 
  a distingushed node called root and sub-trees.
  The root of the tree contains links to 
  other sub-trees.

  Recursion: reducing something in a self similar manner.

  This recursive property of a tree will be use alot,
  especially in its implementation.

2. Has exactly N - 1 edges aka links
  All nodes except root node has EXACTLY 1 incoming edge/link
  Can have more than 1 outgoing links.
  There is only 1 link for each valid parent child relationship.

3. Depth
  Number of edges in path from root to node.
  Or length of path from root to node.
  Each edge on path is one unit of length.

  Depth root node is 0.
  Depth of node is depth of parent + 1

4. Height
  Number of edges in longest path from node to leaf.
  Or length of the path from node to deepest leaf.
  Each edge on path is one unit of length.

  Height of root node is height of entire tree.
  Height of leaf nodes is 0. 
  Height of internal node is max height of children + 1

5. Height of root node
  Equals to height of entire tree.

  Note: Height and depth of a node may be different.
  Try to avoid confusion.


Categories of trees:
1. Balanced trees
  when any two sibling subtrees do not differ 
  in height by more than one level.

  Useful in tree traversal, since if balanced
  we can cut down in half the number of operations.
  Would O(log(2)).

2. Unbalanced trees
  When two sibling subtrees differ significantly 
  in height and have more than one level of depth 
  of difference.

Types of trees:
1. Binary tree:
  Simplest kind of tree. Most famous kind of tree
  Any node can have AT MOST two children.
  
  Most common way to implement is via 
  dynamically created node linked using
  pointers/references, similar to a linked list.

  Has three fields:
    - data aka keys
    - address of left child
    - address of right child 
    - Note: either of these field can be null.

1a. Full binary tree:
    A binary tree in which each node 
    has exactly zero or two children.

1b. Complete binary tree:
  a binary tree which is completely filled, with 
  the possible exception of the bottom level, 
  which is filled from left to right.

  It provides the best possible ratio between 
  number of nodes and height. 

  Its height is at most O(log(n))

2. Binary search tree
  Not all binary trees are binary search trees.
  They have to be ordered in a specific way.

  Ordered in a specific way:
    - Each node contains only 1 key/data
    - The keys in the left subtree are less than 
    keys in parent node. Left < Parent.
    - The keys in the right subtree are greater than 
    the key in its Parent node. Parent < Right.
    - Duplicate keys are not allowed.
    Left < Parent < Right

    Less than values go on left
    Greater than values go on right.

3. Trie:
  Useful for storing dictionaries.
  Fast and efficent for dynamic spell checking.

Usage of each depends on the scenario.

Trees are usually created dynamically 
and linked together using pointers/references.

Traversals:
Ordered way of visiting all nodes of a tree.
Converts hierarchy in to linear sequence.
Since a tree is non linear structure, there no one traversal method.

Two different methods:
1. Depth-first traversal: 
  Go deep, easily implemented recursively

  Methods:
  PreOrder: visit the parent first and then left and right children.
  Root, left, right. 

  InOrder: visit the left child, then the parent and the right child.
  Left, node, right.

  PostOrder: visit left child, then the right child and then the parent.
  Left, right, node (root last).

2. Breath-first traveral: 
  Go wide, no recursive method exists.

  Method:
  LevelOrder: This traversal visits nodes by levels from 
    top to bottom and from left to right.

In binary search trees:
  We like InOrder traversal: 
    allows the nodes to be printed in order.
    Since left is less than right side.


Useful Binary Tree Definitions:
(Source: http://www.cs.jhu.edu/~cohen/CS226/Lectures/Trees.pdf)
Level d- All nodes in a binary tree at depth d
• Maximum of 2d nodes in level nodes in level d

Complete Complete binary tree- tree of height h with 2^h leaf nodes
• 2^h-1 internal nodes
• 2^h+1-1 total nodes

Binary Tree Properties:
(proper) Binary tree T of height h
• h+1 ≤ external nodes ≤ 2h
• h ≤ internal nodes ≤ 2h-1
→2h+1 ≤ total nodes ≤ 2h+1-1
→log(n+1)-1 ≤ h ≤ (n-1)/2
• external nodes = internal nodes+1

Implementing Binary Tree:
Linked:
• Each node references left, right, and parent as well as element.

Vector-based:
• Number nodes in level order
• Store nodes at rank according to number
—Storage allocated for entire complete tree

Processing Binary Trees by Recursion:
The intuition behind the schema is simple;
To count all the nodes in a big tree, we split the task into pieces:
  - count all the nodes in the slightly smaller, left subtree;
  - count all the nodes in the slightly smaller, right subtree;
  - add together these counts, plus one, for the root.

What is Binary Search?
A search algorithm with O(log(n)) time on ordered data.
It works on the principle of divide and conquer.
With it you reduce the size of search space by 1/2
on every step.

1. Look at middle element of set.
2. If match, return index
2. If no match ask: Is number greater or less than middle number?
3. If less, discard right side. If more, discard left side.
4. Repeat till end. Either find number, or number doesn't exist.

Initial Middle formula:
mid = low + (high - low) / 2

Middle formula on next round:
low = mid + 1
mid = low + (high - low) / 2

Binary Search Pseudo code:
Procedure binary_search
   A ← sorted array
   n ← size of array
   x ← value to be searched

   Set lowerBound = 1
   Set upperBound = n 

   while x not found
      if upperBound < lowerBound 
         EXIT: x does not exists.
   
      set midPoint = lowerBound + ( upperBound - lowerBound ) / 2
      
      if A[midPoint] < x
         set lowerBound = midPoint + 1
         
      if A[midPoint] > x
         set upperBound = midPoint - 1 

      if A[midPoint] = x 
         EXIT: x found at location midPoint
   end while
   
end procedure

Binary search trees(BST) ADT:
A special kind of binary tree which is an efficent 
structure to organize data for quick search and update.

Binary tree is any tree where max children allowed are two.
What makes it a binary search tree is its sorted/ordered.

BST's are searchable by sorting placing the smaller value to the left
of the parent/root node. 

A BST nodes are ordered in the following way:
1. each node contains one key (also known as data)
2. the keys in the left subtree are less then the key in its parent node, in short L < P;
3. the keys in the right subtree are greater the key in its parent node, in short P < R;
4. duplicate keys are not allowed.

The order leads to a O(log(n)) or reduce amount of nodes to search by 1/2.
It allow you to use binary search algorithm.
We can search through a huge dataset by dividing our search space in half 
with each step.

So, all the bigger numbers are to the right.
       26
   /       \
  19       33 
/   \     /  \
12  24   31   40 <- biggest
^
|_ smallest

IMPORTANT PATTERN:
All of the subtrees to the left of a node will ALWAYS 
be smaller in value than the subtrees to the right of a node.

Remember, binary trees are recursive. Trees have sub-trees,
thus parents nodes can be root nodes to sub trees.
So, this pattern applies to main tree and all recursive sub-tree. 

Binary Search Trees solve the problem of:
What data structure would you use to store 
a modifiable collection?

Can be data of any type. 
You want to able to quickly search and update it.

You'd want these desirable methods:
- search(n)
- insert(n)
- remove(n)

If you use an array
- search(n) -> O(n)
- insert(n) -> best case: O(1), if array has space
  worst case: O(n), if new array needed to copy
- remove(n) -> O(n)

If you use Linked List:
  - search(n) -> O(n)
  - insert(n) -> at head: O(1)
  - remove(n)


Binary search tree Methods:
searching():
  Searching always starts in root.
  Compare data stored in root with key/data
  of node that we are searching for.

  If the node doesn't contain the key, 
  we either proceed to left of right child
  depending on comparison.

  If negative go left (since left has smaller elements)
  If positive, go right.

  Binary search trees are recursive, so one 
  can use a recursive algorithm.

  Searching in a BST has O(h) worst-case runtime complexity, 
  where h is the height of the tree. 
  Since s binary search tree with n nodes has a minimum of O(log n) levels, 
  it takes at least O(log n) comparisons to find a particular node. 
  Unfortunately, a binary serch tree can degenerate to a linked list, 
  reducing the search time to O(n).

  Best case O(log(n))
  Worst case O(h), h = height of tree
    Can degenerate to a linked list 
    (if not balanced), so then it becomes
    O(n).

insertion():
  Similar to searching
  If the element is in the tree,
  we avoid entering duplicates.

  start at root. Compare. if not null or duplicate, keep moving
  The recursive structure of a BST yields 
  a recursive algorithm.

  If so, we insert it using traversal
  and adding replacing a null pointer
  of the leaf.

  Best case O(log(n))
  Worst case O(h), h = height of tree
    Can degenerate to a linked list 
    (if not balanced), so then it becomes
    O(n).

deletion():
  Trickier than insertion.
  time: O(log(n))
  
  There are several cases to consider
  for a node to be deleted:
    - is not in a tree
    - is a leaf
    - has only one child 
    - has two children

  Is not in a tree:
    Nothing happens. 

  Is a leaf:
    replace with Null

  Has only one child:
    Just like Linked List, 
    we bypass node being deleted.
    I.e. removedNode.prev == removedNode.next
  
  has two children:
    Removing the internal node aka parent, 
    will split the tree in to, causing
    the nodes not to be reachable.

    So, we remove the internal node, by 
    replacing it with the next highest number
    which the largest node on its left side.

    Remember that nodes increase in value
    from left to right. So it will be 
    the right side grandson of the left side child.

    Due to symmetry can also be replaced with the smallest node
    in the right sub tree

    delete: replace node w/ right grandson from left child
    or highest number from left tree.

Another description can be found here:
https://stackoverflow.com/questions/21586085/difference-between-binary-search-and-binary-search-tree

How to choose data structure?
Choice depends on:
  - What needs to be stored?
    Different kinds of data needs different kinds 
    of data structures.
  - Cost of operations
    We need to minimize the cost of most 
    frequently preformed operations.
  - Memory usage
    We want to minimize the amount of memory used.
  - Ease of implementation
    Not the best strategy, but considered.

Usage of trees:
- DOM in HTML
- File system
- Classes in object oriented languages
- Network routing algorithms
- Spell checking w/ tries
- Where hierarchaical data is needed

Uses of binary search trees:
- Databases
  Used in indexing to retrieve and return correct row
- git bisect

Balancing Trees:
Sometimes, adding data to ordered tree might result in having
too much data on one side. This results in unbalanced trees.

Tree shape:
-Tree operations have good performance when each decision throws away half the data.
  -This occurs when each subtree has half the data.
  -This property is captured by the notion of balance.
A tree is balanced if any two sibling subtrees differ in height by at most 1.



Useful sources:
CS at CMU:
https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html

Data structures: Introduction to Trees
https://www.youtube.com/watch?v=qH6yxkw0u78&vl=en

baseCS: How To Not Be Stumped By Trees
https://medium.com/basecs/how-to-not-be-stumped-by-trees-5f36208f68a7

baseCS: Leaf It Up To Binary Trees
https://medium.com/basecs/leaf-it-up-to-binary-trees-11001aaf746d

HackerRank w/ Cracking The Code:
https://www.youtube.com/watch?v=oSWTXtMglKE

Introduction to Trees (MyCodeSchool):
https://www.youtube.com/watch?v=qH6yxkw0u78&vl=en

Tree data structures:
http://people.cs.ksu.edu/~schmidt/300s05/Lectures/Week7b.html
*/