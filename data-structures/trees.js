// trees


/*
Tree ADT (abstract data type)
A non linear collection of entities called nodes, 
linked together to simulate a hierarchy. 

Each node contains some data of any type and may contain
a link or reference to another node (its children).

Principle: 
Trees are useful to represent hierarchical data. 

Advantages of Trees:
- Useful to reflect structural relationship in data
- Useful to represent hierarchies
- Great for oragnzing data for quick search, insertion/deletion
  Binary search trees are useful for this, O(log(n))
- Very Flexible data, allowing to move subtrees with minimum effort.

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
Height: distance of number of links from node to farthest leaf. 
  goes down to farthest leaf.
Depth: distance of number of links from node to root. 
  goes up to root.

Other relations:
Cousin: Nodes with same grand parent
Uncle: Sibling of parent node of node.
Grand parent: Parent of parent
Grand child: Child of Child
Sub tree: a node and all its descendents
  Ignoring the node’s parent, this is itself a tree
Ordered tree: tree with defined order of children
enables ordered enables ordered traversal traversal

Methods:
root(): returns root
parent(n): return parent of node
children(n): returns children of n
size(): returns number of nodes
elements(): returns all elements
positions: returns all postions/nodes
swapElements(n, m): swaps elements at two nodes
replaceElement(n, r): replaces element of node

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

4. Height
  Number of edges in longest path from node to leaf.
  Or length of the path from node to deepest leaf.
  Each edge on path is one unit of length.

  Height of root node is height of entire tree.
  Height of leaf nodes is 0. 

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
  
  Ordered in a specific way:
    - Each node contains only 1 key/data
    - The keys in the left subtree are less than 
    keys in parent node. Left < Parent.
    - The keys in the right subtree are greater than 
    the key in its Parent node. Parent < Right.
    - Duplicate keys are not allowed.
    
    Left < Parent < Right

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

2. Trie:
  Useful for storing dictionaries.
  Fast and efficent for dynamic spell checking.

Usage of each depends on the scenario.

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

Linear vs Trees
Linear data structures (lists, queues, stacks arrays) 
are organized in linear/sequential way.

Linear data structures are useful for ordering things
based on priority and sorting.

Trees are non linear, and useful to 
represent hierarchical data. 

Traversals:
Traversals are a process that visits ALL the nodes in the tree.
Since a tree is non linear structure, there no unique traversal method.

Two types with different methods:
1. Depth-first traversal: Go deep
  PreOrder: visit the parent first and then left and right children

  InOrder: visit the left child, then the parent and the right child
  
  PostOrder: visit left child, then the right child and then the parent

2. Breath-first traveral: Go wide
  LevelOrder: This traversal visits nodes by levels from 
    top to bottom and from left to right.

Usages:
- DOM in HTML
- File system
- Classes in object oriented languages
- Network routing algorithms
- Spell checking w/ tries
- Where hierarchaical data is needed

Useful sources:
CS at CMU:
https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html

Data structures: Introduction to Trees
https://www.youtube.com/watch?v=qH6yxkw0u78&vl=en

*/