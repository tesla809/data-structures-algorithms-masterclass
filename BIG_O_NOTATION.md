Back to [README.md](./README.md)

# Big O Notation
**Objectives**:
1. State the need for Big O Notation
2. Describe what Big O notation is
3. Simpify Big O Expressions
4. Define "time complexity" and "space complexity".
5. Evaluate the "time complexity" and "space complexity" of different algorithms using Big O Notation.
6. Describe what a logarithm is


## The Need for Big O Notation
There are many ways to solve a problem. We can also have different implementations of the same solution. How do we know which algorithm is the most efficient or the best?

**We use Big O Notation to compare algorithms.**

**Big O Notation**: Used in the analysis of algorithms to measure its efficency. It establishes a way to compare and talk about algorithms, irrespective of what machine they run on.

It is a way of generalizing our code so that we can determine.

Example:
Write a function that accepts a string input and returns a reverse copy.

There are various ways to do this:
1. [Stack Overflow answers](https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript)
2. [Analysis of ten ways to solve this](https://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/).

Big O Notation can be seen as a system for classifying the efficiency of code with generalized labels.

![Big O Classification](images/big-o-classifying-scale.png)
*We can compare algorithms with Big O Notation*

Instead of having color or words, we can have a **numeric representation** to measure our code.

**Why care about efficiency?**
Efficiency could mean the difference between code that takes years to complete or minutes.

If Google search was not optimized and each query took minutes, you'd use it ALOT less.

In a business context, it means saving money, time and having a competitive advantage.

**How is Big O Notation useful?**
1. Its important to have precise vocabulary to talk about code performance.
2. Useful for discussing trade offs between different approaches.
3. When your code slows down or crashes, identifying inefficient code can help find pain points to solve.
4. Comes up in interviews.

## Example Problem
Write a function that calculates the sum of all numbers from 1 up to (and including) some number *n*.

Most common solution:
```javascript
// naive solution
function addUpToNaive(n) {
  let total = 0;  // accumulator
  for (let i = 1; i <= n; i++) {
    total += i;  // loop over
  }
  return total;
}

// more optimized solution
function addUpToOptimized(n) {
  return n * (n + 1) / 2;
}
```
[see addUpTo.js](./code/addUpTo.js)
[see repl.it](https://repl.it/@tesla809/AddUpTojs)

![better addition algorithm proof](images/better-addition-algorithm-proof.png)
*Proof of better addition algorithm*
```addUpToOptimized()``` is less intuitive and mathematical. No loops, but there is a proof that validates that it works. Since there isn't a loop, its faster and more efficient than the naive solution.

**What does better mean?**
1. Faster?
2. Less memory intensive?
3. More readable?

It depends on the situation. Most people would choose that speed and memory intensiveness are most important. 

Usually the first two sacrifices readablity. However, you can add comments in the code and in documentation to clarify things. 

The first focus will be on evaluating speed.

**Evaluating Speed**
```javascript
// naive solution
function addUpToNaive(n) {
  let total = 0;  // accumulator
  for (let i = 1; i <= n; i++) {
    total += i;  // loop over
  }
  return total;
}

// more optimized solution
function addUpToOptimized(n) {
  return n * (n + 1) / 2;
}

// Using a timer a naive way to test efficiency of code
// if in browser
let t1 = perfromance.now();
addUpTo(100000000);
let t2 = performance.now()
console.log(`Time elapse: ${(t2 - t1) / 1000}seconds`);

// if in NodeJS
const ONE_BILLION = 1000000000;

// naive solution
let t1 = process.hrtime.bigint();  // returns nanoseconds
addUpToNaive(100000000);
let t2 = process.hrtime.bigint();
console.log(`Naive Time elapse: ${parseInt(t2 - t1) / ONE_BILLION } seconds`);

// optimized solution
let t3 = process.hrtime.bigint();
addUpToOptimized(100000000);
let t4 = process.hrtime.bigint();
console.log(`Optimized Time elapse: ${parseInt(t4 - t3) / ONE_BILLION }seconds`);
```

The duration of the optimized version is SIGNIFICANTLY shorter than the naive solution. This means savings in time, money, and computation.

However, the process of manually timing things before and after is not reliable. There can be variability in execution, some computers can be faster than other. It gives us a false sense of precision. 

## The Problem with Time
1. *Different* machines will record different time.
2. The *same* machine will record different times.
3. For fast algorithms speed measurements may not be precise enough. Its hard to gauge effectiveness since we can't really difference in improvement to compare.

**Timing your code is useful, but not the most effective way to compare algorithms.** What if your code takes hours to run? There needs to be a more effective way to talk about code in general terms. So, we use Big O Notation.

## If Not Time, Then What?
**DON'T**- Count seconds, which are variable within and between machines.

**DO**- Count *number* of simple operations the computer has to perform. That remains *constant* no matter the computer specs.

## Counting Operations
**Small amount of operations equals to faster algorithm**
![counting operations of optimized algo](images/counting-operations-optimized-algo.png)
*It doesn't matter if n is 1 billion or 10. There are only **three** operations occuring.*

**More operations equals to slower algorithm**
![counting operations of naive algo](images/counting-operations-naive-algo.png)

*Using a loop increases our operations to n times.*

**If we have variable amount of operations *n*, how do we count it?**

![counting-is-hard](images/counting-is-hard.png)

**Key Idea:**
We don't care about counting every simple step precisely. 

We focus on the big picture.

We care about the general trend of how the algorithm grows and scales.

**For our naive solution, as **n** grows, the number of operations grows roughly linearly.**


What matters are the leading coefficent, i.e. the highest order coefficent in the polynomial.





**Time complexity**:
**Space complexity**:
**Logarithm**: The opposite of an exponent.
