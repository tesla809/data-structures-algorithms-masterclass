Back to [README.md](./README.md)

# Analyzing Performance of Arrays and Objects
**Looking at Built-In Data Structures in JavaScript through the lens of Big O.**

Let's look at Arrays, Objects and built-in methods.

## Objectives:
1. Understand how objects and arrays work, through the lens of Big O.
2. Explain why adding elements to the beginning of an array is costly.
3. Compare and contrast the runtime for arrays and objects, as well as built-in methods.

## Objects
Objects are unordered key-value pairs.

```javascript
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1,2,3,4]
}
```

### When to use objects
1. When you don't need order
2. When you need fast access, insertion, removal
3. When you don't need ordering

### Big O of Objects
Insertion: O(1)

Removal: O(1)

Update: O(1)

Access: O(1)

Searching: O(n) 

*Remember: O(1) is constant time. It is the fastest we can go.*

*Note: Doesn't matter where you insert, because there is no beginning or end to an object.*

*Note: Searching means checking to see if a given piece of information is a value in a key. We may have to check every property aka key. Thus its linear time.*

*Side note: Behind the scenes, objects are really Hash Maps, which will be explained in a later file.*

### Big O of Object Methods
Object.keys: O(n)

Object.values: O(n)

Object.entries: O(n)

hasOwnProperty: O(1)

*Note: The first three methods return an array. We cycle through each key an add it to the array. Hence linear time.* 

*Note: We are able to access information in constant time. So checking to see if a key/property exists will also be constant time. So, hasOwnProperty is contant time.*

Objects are quick for pretty much everything, but we don't have any order.

## Arrays
Ordered Lists

Arrays are slower than objects, but they can be ordered.

```javascript
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, 2, "awesome"];
```

### When to use Arrays
1. When you need order.
2. When you need fast access, insertion, removal (sort of...).

*Note: There are other list structures that are still ordered, but perform better depending on what is needed. Some are singly linked lists and doubly linked list. Those will be described in a later file.*

*Note: Arrays can have issues around insertion and removal.*

### Big O of Arrays
Insertion: It depends...

1. best:O(1)

2. worst: O(n)

Removal: It depends...

1. best:O(1)

2. worst: O(n)

Searching: O(n)

Access: O(1)

### Big O of Arrays Explained

**Accessing Data**

Accessing array by the index directly, since its ordered. The computer doesn't have to go through each element to find the index. Hence constant time for access."

**Inserting Data**

Insertion to **end of array is easy**. We just go to the last index and add another element. So, constant time O(1)

Insertion at the **beginning of the array is hard**. The reason has to do with the index. Say, we insert at index 0. Then we would have to shift and re-index every element in the array. So, linear time O(n).

**Removing Data**

Removal faces the same problems as insertion.

Removing at the **end of the arrary is easy**. Can access last element via index and remove. Constant time O(1).

Removing at the **beginning of the arrary is hard**. Will have to re-index entire array. Constant time O(n).

**Searching Data**

Searching in an unsorted array means that we might have to check every element. The more elements we added, the more we search. So at worst case, its linear O(n).

There could be some potential optimization that can be used when data is sorted, but that comes up in later files.


### Big O of Array Methods
push: O(1)

pop: O(1)

shift: O(n)

unshift: O(n)

concat: O(n)

slice: O(n)

splice: O(n)

sort: O(n * log n)

forEach/map/filter/reduce...(iterators): O(n)


**.push() and .pop()**

Add and remove at end of array. Constant O(1).


**.shift() and .unshift()**

Add and remove at the beginning of array. Linear O(n)

**concat**:
join together two arrays. As the number of elements in array grows, so does the time. Linear O(n)


**slice:**:

Returns a copy of part of an array from start to end positions. As number of element in array grows, so does time. Linear O(n).

**splice:**:

Remove and add part of an array from start to end positions. We can insert at beginning or end of array. As number of element in array grows, so does time. Linear O(n).


**sort**: 

Sort array based on some criteria. As number of element in array grows, so does time. Logorithmic O(n * log n). 

To sort, we have to make comparisions and move things around. So its more complicated, hence its not Linear O(n).

This is the slowest array method.

We will talk more about this later on in another file.

**forEach/map/filter/reduce...(iterators)**:
Methods that iterate (cycle) over arrays and does something specific on each element. As number of element in array grows, so does time. So, Linear O(n).

### Limitations of Array
Inserting at the beginning is not as easy as we may think.

There are **MORE EFFICIENT** data structures for that!

## Takeaways
If using arrays, better to add and remove from the end than the beginning or middle. It is the difference between constant time and linear time.

If order doesn't matter, use an object since it performs better.


Back to [README.md](./README.md)