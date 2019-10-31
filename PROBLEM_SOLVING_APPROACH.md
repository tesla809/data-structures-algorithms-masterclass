Back to [README.md](./README.md)

# Problem Solving Approach
**Algorithm and Problem Solving Patterns**

## Objectives
1. Define what an algorithm is
2. Devise a plan to solve algorithms
3. Compare and contrast problem solving patterns including frequency counters, two pointer problems and divide and conquer.

## What is an Algorithm?
 **A PROCESS or SET OF STEPS to accomplish a task.**

## Why do I need to know this?
1. Almost everything done in programming involves some kind of algorithm

2. Its the **Foundation** for being a successful problem solving developer.

3. Needed for **interviews**. 

4. Its the difference between being a simple CRUD developer and doing more advanced work.

## How Do You improve?
1. **Devise** a plan for solving problems

2. **Master** common problem solving patterns

## Problem Solving Strategies
**A simple, foolproof, fail-safe approach**
1. Understand the Problem

2. Explore Concrete Examples

3. Break It Down

4. Solve/Simplify

5. Look Back and Refactor

*Note: Many of these strategies are adapted from George Polya's book "How To Solve It". It is a great resource for anyone who wants to become better at problem solving.*

## Understand The Problem
1. Can I restate the problem in my own words?

2. What are the inputs that go into the problem?

3. What are the outputs should come from the solution?

4. Can the outputs be determined from the inputs?

5. How should I label the important pieces of data that are part of the problem?

*Note:*

*#4 can be rephrased as:*

*Do I have enough information to solve this problem?*

*You may not be able to answer the questions until you start solving the problem? Its Ok. Its worth considering the question early on.*

## Example Problem: 
**Write a function that takes two numbers and returns their sum.**

## Why create Sample Examples
1. Coming up with examples can help you better understand the problem better.

2. Example also provide sanity checks that your eventual solutoins works how it should.

3. Tools to use: User Stories, Unit Tests.

## Explore Examples
1. Start with simple examples.

2. Progress to more complex examples.

3. Explore examples empty inputs.

4. Explore examples with invalid inputs.

## Example Problem 2
**Write a function which takes in a string and returns the counts of each character in the string**

### Breakdown
1. Explicitly write out the steps you need to take.

This forces you to think about the code you will write **BEFORE** you write it. It helps you catch any conceptual issues or misunderstandings **BEFORE** you start and have to worry about details like language syntax.

### Simply
1. Solve a simpler problem first

2. Find the core difficulty in what you're trying to do.

3. Temporarily ignore that difficultly.

4. Write a simplfied solution.

5. The add the difficulty back in.


### Look Back and Refactor
Refactoring questions:
1. Can you check the result?
2. Can you derive the result differently?
3. Can you use the result or method for some other problem?
4. Can you improve the performance of your solution?
5. Can you think of other ways to refactor?
6. How have other people solved this problem?

### Recap!
1. Understand the problem
2. Explore the concrete examples
3. Break it down
4. Solve/Simplify
5. Look back and refactor

## Problem Solving Patterns
**Some Patterns**
1. Frequency Counter
2. Multiple Pointers
3. Sliding Window
4. Divide and Conquer
5. Dynamic Programming
6. Greed Algorithms
7. Backtracking
8. Many more!

### Frequency Counter
1. This pattern uses objects or set to collect values/frequency of values

2. This can often avoid the need for nested loops aka O(N^2) operations with arrays and strings

#### An Example
Write a function called **same**, which accepts two arrays. The function should **return true** if every value in the array has it's corresponding value sqaured in the second array. The frequency of values must be the same. 

Order doesn't seem to matter. But frequency does.
```javascript
same([1,2,3], [4,1,9]);  // true
same([1,2,3], [4,9]);  // false
same([1,2,1], [4,4,1]);  // false must be same frequency
```

### Naive solution
```javascript
function same(arr1, arr2) {
  if(arr.length !== arr2.length) {  // same length needed to have same frequency
    return false;
  }

  for(let i = 0; i < arr.length; i++) {  // O(n)
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {  // false if not found
      return false;
    }
    arr2.splice(correctIndex, 1);  // splice is O(n)
  }
  return true;
}
```
**Time complexity- n^2**
We have a loop in a loop, so its O(n^2).
O(n) (loop) * O(n) (splice) = O(n^2)


### Refactored
```javascript
function same(arr1, arr2) {
  if(arr.length !== arr2.length) {
  return false;
}
//...
}
```


### Multiple Pointers
### Sliding Window
### Divide and Conquer
### Dynamic Programming
### Greed Algorithms
### Backtracking
### Many more!





Back to [README.md](./README.md)