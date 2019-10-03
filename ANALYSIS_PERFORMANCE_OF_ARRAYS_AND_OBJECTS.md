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
Searching: O(n) 
Access: O(n)

### Big O of Object Methods
Object.keys: O(n)

Object.values: O(n)

Object.entries: O(n)

hasOwnProperty: O(1)

## Arrays
Ordered Lists

```javascript
let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, 2, "awesome"];
```

### When to use Arrays
1. When you need order
2. When you need fast access, insertion, removal (sort of...)

### Big O of Arrays
Insertion: It depends...

Removal: It depends...

Searching: O(n)

Access: O(1)

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

### Limitations of Array
Inserting at the beginning is not as easy as we may think
There are **MORE EFFICIENT** data structures for that!

